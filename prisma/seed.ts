import "dotenv/config";
import { PrismaClient } from "../lib/prisma-generated/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set");
}

console.log("Connecting to database:", connectionString.substring(0, 40) + "...");

const pool = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter: pool,
});

async function main() {
  // Clear existing data
  await prisma.user.deleteMany();

  // Seed sample users
  const users = [
    { name: "John Doe", phoneNumber: "0412345678", email: "john@example.com" },
    { name: "Jane Smith", phoneNumber: "0423456789", email: "jane@example.com" },
    {
      name: "Alice Johnson",
      phoneNumber: "0434567890",
      email: "alice@example.com",
    },
    {
      name: "Bob Williams",
      phoneNumber: "0445678901",
      email: "bob@example.com",
    },
    {
      name: "Charlie Brown",
      phoneNumber: "0456789012",
      email: "charlie@example.com",
    },
    { name: "Emily Davis", phoneNumber: "0467890123", email: "emily@example.com" },
    {
      name: "Frank Miller",
      phoneNumber: "0478901234",
      email: "frank@example.com",
    },
    { name: "Grace Lee", phoneNumber: "0489012345", email: "grace@example.com" },
    {
      name: "Henry Moore",
      phoneNumber: "0490123456",
      email: "henry@example.com",
    },
    {
      name: "Isabella Young",
      phoneNumber: "0401234567",
      email: "isabella@example.com",
    },
    {
      name: "James Wilson",
      phoneNumber: "0412987654",
      email: "james@example.com",
    },
    {
      name: "Karen Taylor",
      phoneNumber: "0423456780",
      email: "karen@example.com",
    },
    {
      name: "Leo Anderson",
      phoneNumber: "0434567891",
      email: "leo@example.com",
    },
    {
      name: "Maria Thomas",
      phoneNumber: "0445678902",
      email: "maria@example.com",
    },
    {
      name: "Nathan Jackson",
      phoneNumber: "0456789013",
      email: "nathan@example.com",
    },
    {
      name: "Olivia White",
      phoneNumber: "0467890124",
      email: "olivia@example.com",
    },
    {
      name: "Paul Harris",
      phoneNumber: "0478901235",
      email: "paul@example.com",
    },
    {
      name: "Quinn Martin",
      phoneNumber: "0489012346",
      email: "quinn@example.com",
    },
    {
      name: "Rachel Garcia",
      phoneNumber: "0490123457",
      email: "rachel@example.com",
    },
    {
      name: "Samuel Rodriguez",
      phoneNumber: "0401234568",
      email: "samuel@example.com",
    },
    {
      name: "Tina Martinez",
      phoneNumber: "0412345679",
      email: "tina@example.com",
    },
    {
      name: "Victor Thompson",
      phoneNumber: "0423456781",
      email: "victor@example.com",
    },
    {
      name: "Wendy Hernandez",
      phoneNumber: "0434567892",
      email: "wendy@example.com",
    },
    { name: "Xavier Lopez", phoneNumber: "0445678903", email: "xavier@example.com" },
    {
      name: "Yara Gonzalez",
      phoneNumber: "0456789014",
      email: "yara@example.com",
    },
    {
      name: "Zachary Clark",
      phoneNumber: "0467890125",
      email: "zachary@example.com",
    },
    { name: "Amy Ramirez", phoneNumber: "0478901236", email: "amy@example.com" },
    {
      name: "Benjamin Bell",
      phoneNumber: "0489012347",
      email: "benjamin@example.com",
    },
    {
      name: "Chloe Rivera",
      phoneNumber: "0490123458",
      email: "chloe@example.com",
    },
    {
      name: "Daniel Campbell",
      phoneNumber: "0401234569",
      email: "daniel@example.com",
    },
  ];

  console.log(`Start seeding ...`);

  for (const user of users) {
    const createdUser = await prisma.user.create({
      data: user,
    });
    console.log(`Created user with id: ${createdUser.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
