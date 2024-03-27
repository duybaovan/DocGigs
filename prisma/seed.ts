import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create locations first
  const locations = [
    { city: "New York", state: "NY" },
    { city: "San Francisco", state: "CA" },
    // ... add more locations as needed
  ];

  for (const location of locations) {
    await prisma.location.create({
      data: location,
    });
  }

  // Now create gigs
  const gigs = [
    {
      companyName: "10/10 Doctors Surveys",
      description: "Conducting surveys among medical professionals",
      locationId: 1, // Replace with the actual location ID
      hourlyPay: 30,
    },
    {
      companyName: "Physicians Side Gig FB",
      description: "Managing a Facebook group for physicians' side jobs",
      locationId: 2, // Replace with the actual location ID
      hourlyPay: 40,
    },
    // ... add more gigs as needed
  ];

  for (const gig of gigs) {
    await prisma.gig.create({
      data: gig,
    });
  }

  console.log("Seeding finished.");
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
