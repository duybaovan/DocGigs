import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create locations first
  // Clear all gigs from the database
  await prisma.gig.deleteMany({});
  console.log("All gigs have been cleared from the database.");
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
