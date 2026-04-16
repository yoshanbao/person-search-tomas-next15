import { PrismaClient } from "./prisma-generated/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const connectionString = process.env.DATABASE_URL;

const pool = new PrismaPg({
  connectionString,
});

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter: pool,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
