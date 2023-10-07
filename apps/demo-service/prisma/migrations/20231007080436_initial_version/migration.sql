/*
  Warnings:

  - You are about to drop the `ParameterConstraint` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "EnumTrialTrialType" AS ENUM ('init', 'autogen', 'valid');

-- DropForeignKey
ALTER TABLE "ParameterConstraint" DROP CONSTRAINT "ParameterConstraint_searchSpaceId_fkey";

-- DropTable
DROP TABLE "ParameterConstraint";

-- CreateTable
CREATE TABLE "Trial" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "experimentId" TEXT,
    "id" TEXT NOT NULL,
    "trialBody" JSONB,
    "trialIndex" INTEGER NOT NULL,
    "trialType" "EnumTrialTrialType",
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Trial_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Trial" ADD CONSTRAINT "Trial_experimentId_fkey" FOREIGN KEY ("experimentId") REFERENCES "Experiment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
