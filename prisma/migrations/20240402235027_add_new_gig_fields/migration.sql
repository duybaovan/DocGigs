-- AlterTable
ALTER TABLE "Gig" ADD COLUMN     "assignmentLength" TEXT,
ADD COLUMN     "ehrSoftwareUsed" TEXT,
ADD COLUMN     "hospitalCertification" TEXT,
ADD COLUMN     "hospitalDescription" TEXT,
ADD COLUMN     "hospitalName" TEXT,
ADD COLUMN     "hospitalSize" INTEGER,
ADD COLUMN     "hospitalStarRating" INTEGER,
ADD COLUMN     "malpracticeCoverage" TEXT,
ADD COLUMN     "milesFromYou" INTEGER,
ADD COLUMN     "minimumRequirements" TEXT[],
ADD COLUMN     "payment" TEXT,
ADD COLUMN     "reasonForLocumsNeed" TEXT,
ADD COLUMN     "schedules" TEXT,
ADD COLUMN     "shiftLength" INTEGER,
ADD COLUMN     "specialty" TEXT,
ADD COLUMN     "travel" TEXT;
