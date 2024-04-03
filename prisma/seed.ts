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
      schedules: "Weekdays",
      assignmentLength: "26 Weeks",
      specialty: "Cardiology",
      ehrSoftwareUsed: "Epic",
      payment: "Direct Deposit",
      milesFromYou: 15,
      hospitalName: "Saint Luke's Medical Center",
      hospitalSize: 200,
      hospitalDescription:
        "A leading healthcare provider in heart and vascular care.",
      hospitalCertification: "JCI Accredited",
      hospitalStarRating: 4,
      malpracticeCoverage: "Yes",
      shiftLength: 8,
      minimumRequirements: [
        "Board Certified",
        "2 years of clinical experience",
      ],
      travel: "Not required",
      reasonForLocumsNeed: "Maternity leave coverage",
    },
    {
      id: 2,
      companyName: "Global Health Insights",
      description:
        "Lead a team of researchers in conducting comprehensive studies on global health trends. Manage data collection, analysis, and reporting to support international health initiatives and policy development.",
      locationId: 2,
      hourlyPay: 40,
      schedules: "Weekends",
      assignmentLength: "13 weeks",
      specialty: "General Practice",
      ehrSoftwareUsed: "Cerner",
      payment: "Direct Deposit",
      milesFromYou: 10,
      hospitalName: "Global Health General Hospital",
      hospitalSize: 500,
      hospitalDescription:
        "An international hospital known for its research in global health trends.",
      hospitalCertification: "WHO Recognized",
      hospitalStarRating: 5,
      malpracticeCoverage: "Yes",
      shiftLength: 12,
      minimumRequirements: ["Board Eligible", "1 year of clinical experience"],
      travel: "Required. Expenses covered up to $5000",
      reasonForLocumsNeed: "Expansion of hospital services",
    },
    {
      id: 3,
      companyName: "Dental Dynamics",
      description:
        "Join our team to revolutionize dental care through innovative research in dental equipment and patient care practices.",
      locationId: 3,
      hourlyPay: 45,
      schedules: "Flexible",
      assignmentLength: "12 Weeks",
      specialty: "Dentistry",
      ehrSoftwareUsed: "Dentrix",
      payment: "Direct Deposit",
      milesFromYou: 5,
      hospitalName: "Bright Smile Dental Clinic",
      hospitalSize: 50,
      hospitalDescription:
        "A community-focused clinic providing cutting-edge dental care.",
      hospitalCertification: "ADA Accredited",
      hospitalStarRating: 3,
      malpracticeCoverage: "Yes",
      shiftLength: 10,
      minimumRequirements: ["DDS or DMD", "Valid state dental license"],
      travel: "Not required",
      reasonForLocumsNeed: "Sabbatical of a senior dentist",
    },
    {
      id: 4,
      companyName: "Visionary Eye Health",
      description:
        "Contribute to the development of ophthalmic technologies and participate in clinical trials for new eye care treatments.",
      locationId: 4,
      hourlyPay: 50,
      schedules: "Weekdays",
      assignmentLength: "24 Weeks",
      specialty: "Ophthalmology",
      ehrSoftwareUsed: "NextGen Healthcare",
      payment: "Direct Deposit",
      milesFromYou: 20,
      hospitalName: "Insight Eye Hospital",
      hospitalSize: 100,
      hospitalDescription:
        "A pioneer in ophthalmic surgery and comprehensive eye care.",
      hospitalCertification: "AAO Certified",
      hospitalStarRating: 4,
      malpracticeCoverage: "Yes",
      shiftLength: 8,
      minimumRequirements: [
        "Board Certified in Ophthalmology",
        "3 years of clinical experience",
      ],
      travel: "Not required",
      reasonForLocumsNeed: "Research project participation",
    },
    {
      id: 5,
      companyName: "Ortho Innovators",
      description:
        "Be part of a leading team in orthopedic surgery, contributing to the development of new surgical techniques and implants.",
      locationId: 5,
      hourlyPay: 55,
      schedules: "Weekdays and Weekends",
      assignmentLength: "18 Weeks",
      specialty: "Orthopedic Surgery",
      ehrSoftwareUsed: "Allscripts",
      payment: "Direct Deposit",
      milesFromYou: 30,
      hospitalName: "Advanced Orthopedics Center",
      hospitalSize: 150,
      hospitalDescription:
        "Renowned for excellence in orthopedic surgery and rehabilitation.",
      hospitalCertification: "AAOS Accredited",
      hospitalStarRating: 5,
      malpracticeCoverage: "Yes",
      shiftLength: 12,
      minimumRequirements: [
        "Board Certified in Orthopedic Surgery",
        "5 years of surgical experience",
      ],
      travel: "Required. Expenses covered up to $3000",
      reasonForLocumsNeed: "Extended leave of a key surgeon",
    },
    {
      id: 6,
      companyName: "Pediatric Pros",
      description:
        "Support pediatric care advancements by joining our research on pediatric diseases and child healthcare improvement strategies.",
      locationId: 6,
      hourlyPay: 35,
      schedules: "Flexible",
      assignmentLength: "20 Weeks",
      specialty: "Pediatrics",
      ehrSoftwareUsed: "Meditech",
      payment: "Direct Deposit",
      milesFromYou: 25,
      hospitalName: "Happy Kids Pediatric Center",
      hospitalSize: 80,
      hospitalDescription:
        "Dedicated to providing compassionate and comprehensive care for children.",
      hospitalCertification: "AAP Accredited",
      hospitalStarRating: 4,
      malpracticeCoverage: "Yes",
      shiftLength: 10,
      minimumRequirements: [
        "Board Certified in Pediatrics",
        "2 years of pediatric experience",
      ],
      travel: "Not required",
      reasonForLocumsNeed: "Research and development project",
    },
    {
      id: 7,
      companyName: "Emergency Care Specialists",
      description:
        "Join a fast-paced environment and contribute to emergency medicine by providing critical care to patients in urgent need.",
      locationId: 7,
      hourlyPay: 60,
      schedules: "Rotating Shifts",
      assignmentLength: "22 Weeks",
      specialty: "Emergency Medicine",
      ehrSoftwareUsed: "Cerner",
      payment: "Direct Deposit",
      milesFromYou: 12,
      hospitalName: "Rapid Response Emergency Hospital",
      hospitalSize: 300,
      hospitalDescription:
        "A state-of-the-art facility specializing in emergency medicine and trauma care.",
      hospitalCertification: "ACEP Recognized",
      hospitalStarRating: 5,
      malpracticeCoverage: "Yes",
      shiftLength: 12,
      minimumRequirements: [
        "Board Certified in Emergency Medicine",
        "3 years of emergency room experience",
      ],
      travel: "Not required",
      reasonForLocumsNeed: "Increase in patient volume",
    },
    {
      id: 8,
      companyName: "Neuro Network",
      description:
        "Be at the forefront of neurology by engaging in clinical research and providing care for patients with neurological disorders.",
      locationId: 8,
      hourlyPay: 65,
      schedules: "Weekdays",
      assignmentLength: "30 Weeks",
      specialty: "Neurology",
      ehrSoftwareUsed: "Epic",
      payment: "Direct Deposit",
      milesFromYou: 8,
      hospitalName: "Brain and Spine Institute",
      hospitalSize: 250,
      hospitalDescription:
        "A leading institution in neurological research and patient care.",
      hospitalCertification: "AAN Accredited",
      hospitalStarRating: 4,
      malpracticeCoverage: "Yes",
      shiftLength: 10,
      minimumRequirements: [
        "Board Certified in Neurology",
        "4 years of clinical experience",
      ],
      travel: "Required. Expenses covered up to $4000",
      reasonForLocumsNeed: "Sabbatical of a leading neurologist",
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
