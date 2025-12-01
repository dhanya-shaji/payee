import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.payee.createMany({
    data: [
      {
        name: "John Doe",
        accountNumber: "1234567890",
        bankName: "Deutsche Bank",
        ifsc: "DEUTDEFF",
        swift: "DEUTDEFFXXX",
      },
      {
        name: "Jane Smith",
        accountNumber: "9876543210",
        bankName: "Commerzbank",
        ifsc: "COBADEFF",
        swift: "COBADEFFXXX",
      },
    ],
    skipDuplicates: true,
  });
  console.log("Seed completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
