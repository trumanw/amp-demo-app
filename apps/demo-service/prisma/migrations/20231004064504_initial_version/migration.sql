/*
  Warnings:

  - You are about to drop the `ParameterSpace` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ExperimentToParameterSpace` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ExperimentToParameterSpace" DROP CONSTRAINT "_ExperimentToParameterSpace_A_fkey";

-- DropForeignKey
ALTER TABLE "_ExperimentToParameterSpace" DROP CONSTRAINT "_ExperimentToParameterSpace_B_fkey";

-- AlterTable
ALTER TABLE "Experiment" ADD COLUMN     "optimizationConfigId" TEXT,
ADD COLUMN     "searchSpaceId" TEXT;

-- DropTable
DROP TABLE "ParameterSpace";

-- DropTable
DROP TABLE "_ExperimentToParameterSpace";

-- DropEnum
DROP TYPE "EnumParameterSpaceParameterType";

-- DropEnum
DROP TYPE "EnumParameterSpaceValueType";

-- CreateTable
CREATE TABLE "SearchSpace" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SearchSpace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parameter" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "parameterBody" TEXT,
    "parameterClass" TEXT,
    "parameterName" TEXT,
    "searchSpaceId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Parameter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParameterConstraint" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "searchSpaceId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ParameterConstraint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OptimizationConfig" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "outcomeConstraints" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OptimizationConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Objective" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "objectiveBody" TEXT,
    "objectiveClass" TEXT,
    "objectiveName" TEXT,
    "optimizationConfigId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Objective_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Experiment" ADD CONSTRAINT "Experiment_optimizationConfigId_fkey" FOREIGN KEY ("optimizationConfigId") REFERENCES "OptimizationConfig"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experiment" ADD CONSTRAINT "Experiment_searchSpaceId_fkey" FOREIGN KEY ("searchSpaceId") REFERENCES "SearchSpace"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parameter" ADD CONSTRAINT "Parameter_searchSpaceId_fkey" FOREIGN KEY ("searchSpaceId") REFERENCES "SearchSpace"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParameterConstraint" ADD CONSTRAINT "ParameterConstraint_searchSpaceId_fkey" FOREIGN KEY ("searchSpaceId") REFERENCES "SearchSpace"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Objective" ADD CONSTRAINT "Objective_optimizationConfigId_fkey" FOREIGN KEY ("optimizationConfigId") REFERENCES "OptimizationConfig"("id") ON DELETE SET NULL ON UPDATE CASCADE;
