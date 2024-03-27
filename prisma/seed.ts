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
      id: 1,
      companyName: "MediTech Innovations Inc.",
      description:
        "Participate in groundbreaking medical technology surveys that shape the future of healthcare. Provide valuable insights by engaging with various medical professionals and contribute to the advancement of medical devices and pharmaceuticals.",
      locationId: 1,
      hourlyPay: 30,
    },
    {
      id: 2,
      companyName: "Global Health Insights",
      description:
        "Lead a team of researchers in conducting comprehensive studies on global health trends. Manage data collection, analysis, and reporting to support international health initiatives and policy development.",
      locationId: 2,
      hourlyPay: 40,
    },
    {
      id: 3,
      companyName: "PharmaFuture Research Group",
      description:
        "Collaborate with leading pharmaceutical companies to conduct in-depth market research and analysis. Your role will involve designing surveys, interviewing healthcare professionals, and synthesizing findings to inform new drug development strategies.",
      locationId: 1,
      hourlyPay: 45,
    },
    {
      id: 4,
      companyName: "Healthcare Horizons Consulting",
      description:
        "Provide expert consulting services to healthcare facilities looking to optimize their operations. Your insights will directly impact patient care quality and operational efficiency through strategic planning and process improvement initiatives.",
      locationId: 2,
      hourlyPay: 50,
    },
    {
      id: 5,
      companyName: "NextGen Medical Data Analytics",
      description:
        "Utilize cutting-edge data analytics tools to transform large datasets into actionable insights for medical institutions. Your work will support clinical decision-making and enhance patient outcomes by identifying key health trends and risk factors.",
      locationId: 1,
      hourlyPay: 55,
    },
    {
      id: 6,
      companyName: "Wellness & Co. Lifestyle Research",
      description:
        "Engage in pioneering research on wellness and lifestyle factors that influence health outcomes. Your role will involve surveying diverse populations, analyzing lifestyle data, and contributing to public health campaigns.",
      locationId: 2,
      hourlyPay: 60,
    },
    {
      id: 7,
      companyName: "BioTech Solutions Lab",
      description:
        "Work in a dynamic laboratory environment to support biotechnological research and innovation. Your expertise will aid in the development of new medical treatments and technologies that have the potential to revolutionize patient care.",
      locationId: 1,
      hourlyPay: 65,
    },
    {
      id: 8,
      companyName: "Elite Medical Staffing",
      description:
        "Join a team dedicated to providing top-tier staffing solutions for medical facilities. Your role will focus on recruiting highly qualified medical professionals and matching them with opportunities that align with their expertise and career goals.",
      locationId: 2,
      hourlyPay: 70,
    },
    {
      id: 9,
      companyName: "CureSync Clinical Trials",
      description:
        "Play a critical role in the execution of clinical trials for new medications and treatments. As a coordinator, you will oversee trial logistics, ensure compliance with regulatory standards, and contribute to the advancement of medical science.",
      locationId: 1,
      hourlyPay: 75,
    },
    {
      id: 10,
      companyName: "HealthTech Innovators",
      description:
        "Be at the forefront of health technology by contributing to the design and testing of innovative medical devices. Your work will help shape the future of patient care by bringing cutting-edge technologies from concept to clinical use.",
      locationId: 2,
      hourlyPay: 80,
    },
  ];

  for (const gig of gigs) {
    await prisma.gig.upsert({
      where: { id: gig.id },
      update: gig,
      create: gig,
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
