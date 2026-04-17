import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { createUserSchema, updateUserSchema, User } from "./schemas";
import { ZodError } from "zod";

const connectionString: string = process.env.DATABASE_URL || "";
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

export interface ToolResult {
  success: boolean;
  data?: User | User[] | null;
  error?: string;
  message?: string;
}

function formatZodError(error: ZodError): string {
  return error.errors.map((err: any) => `${err.path.join(".")}: ${err.message}`).join(", ");
}

export async function createUser(
  name: string,
  email: string,
  phoneNumber: string
): Promise<ToolResult> {
  try {
    const validatedData = createUserSchema.parse({
      name,
      email,
      phoneNumber,
    });

    const user = await prisma.user.create({
      data: validatedData,
    });

    return {
      success: true,
      data: user as User,
      message: `User ${user.name} created successfully with ID ${user.id}`,
    };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        success: false,
        error: formatZodError(error),
      };
    }
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    }
    return {
      success: false,
      error: "Unknown error occurred",
    };
  }
}

export async function readUser(
  userId?: string,
  searchQuery?: string
): Promise<ToolResult> {
  try {
    if (userId) {
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        return {
          success: false,
          error: `User with ID ${userId} not found`,
        };
      }

      return {
        success: true,
        data: user as User,
        message: `User ${user.name} retrieved successfully`,
      };
    }

    if (searchQuery) {
      const users = await prisma.user.findMany({
        where: {
          name: {
            startsWith: searchQuery,
            mode: "insensitive",
          },
        },
      });

      return {
        success: true,
        data: users as User[],
        message: `Found ${users.length} user(s) matching "${searchQuery}"`,
      };
    }

    // If neither userId nor searchQuery provided, return all users
    const allUsers = await prisma.user.findMany();

    return {
      success: true,
      data: allUsers as User[],
      message: `Retrieved ${allUsers.length} total user(s)`,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    }
    return {
      success: false,
      error: "Unknown error occurred",
    };
  }
}

export async function updateUser(
  userId: string,
  name?: string,
  email?: string,
  phoneNumber?: string
): Promise<ToolResult> {
  try {
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      return {
        success: false,
        error: `User with ID ${userId} not found`,
      };
    }

    // Validate provided fields
    const updateData = updateUserSchema.parse({
      name: name !== undefined ? name : undefined,
      email: email !== undefined ? email : undefined,
      phoneNumber: phoneNumber !== undefined ? phoneNumber : undefined,
    });

    // Remove undefined fields
    const cleanedData = Object.fromEntries(
      Object.entries(updateData).filter(([, value]) => value !== undefined)
    );

    if (Object.keys(cleanedData).length === 0) {
      return {
        success: false,
        error: "No fields to update provided",
      };
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: cleanedData,
    });

    return {
      success: true,
      data: updatedUser as User,
      message: `User ${updatedUser.name} updated successfully`,
    };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        success: false,
        error: formatZodError(error),
      };
    }
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    }
    return {
      success: false,
      error: "Unknown error occurred",
    };
  }
}

export async function deleteUser(userId: string): Promise<ToolResult> {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      return {
        success: false,
        error: `User with ID ${userId} not found`,
      };
    }

    await prisma.user.delete({
      where: { id: userId },
    });

    return {
      success: true,
      message: `User ${existingUser.name} deleted successfully`,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    }
    return {
      success: false,
      error: "Unknown error occurred",
    };
  }
}
