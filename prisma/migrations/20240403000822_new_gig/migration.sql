/*
  Warnings:

  - Made the column `assignmentLength` on table `Gig` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ehrSoftwareUsed` on table `Gig` required. This step will fail if there are existing NULL values in that column.
  - Made the column `hospitalCertification` on table `Gig` required. This step will fail if there are existing NULL values in that column.
  - Made the column `hospitalDescription` on table `Gig` required. This step will fail if there are existing NULL values in that column.
  - Made the column `hospitalName` on table `Gig` required. This step will fail if there are existing NULL values in that column.
  - Made the column `hospitalSize` on table `Gig` required. This step will fail if there are existing NULL values in that column.
  - Made the column `hospitalStarRating` on table `Gig` required. This step will fail if there are existing NULL values in that column.
  - Made the column `malpracticeCoverage` on table `Gig` required. This step will fail if there are existing NULL values in that column.
  - Made the column `milesFromYou` on table `Gig` required. This step will fail if there are existing NULL values in that column.
  - Made the column `payment` on table `Gig` required. This step will fail if there are existing NULL values in that column.
  - Made the column `reasonForLocumsNeed` on table `Gig` required. This step will fail if there are existing NULL values in that column.
  - Made the column `schedules` on table `Gig` required. This step will fail if there are existing NULL values in that column.
  - Made the column `shiftLength` on table `Gig` required. This step will fail if there are existing NULL values in that column.
  - Made the column `specialty` on table `Gig` required. This step will fail if there are existing NULL values in that column.
  - Made the column `travel` on table `Gig` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Gig" ALTER COLUMN "assignmentLength" SET NOT NULL,
ALTER COLUMN "ehrSoftwareUsed" SET NOT NULL,
ALTER COLUMN "hospitalCertification" SET NOT NULL,
ALTER COLUMN "hospitalDescription" SET NOT NULL,
ALTER COLUMN "hospitalName" SET NOT NULL,
ALTER COLUMN "hospitalSize" SET NOT NULL,
ALTER COLUMN "hospitalStarRating" SET NOT NULL,
ALTER COLUMN "malpracticeCoverage" SET NOT NULL,
ALTER COLUMN "milesFromYou" SET NOT NULL,
ALTER COLUMN "payment" SET NOT NULL,
ALTER COLUMN "reasonForLocumsNeed" SET NOT NULL,
ALTER COLUMN "schedules" SET NOT NULL,
ALTER COLUMN "shiftLength" SET NOT NULL,
ALTER COLUMN "specialty" SET NOT NULL,
ALTER COLUMN "travel" SET NOT NULL;
