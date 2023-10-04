-- CreateEnum
CREATE TYPE "EnumExperimentGoal" AS ENUM ('MOO');

-- CreateEnum
CREATE TYPE "EnumParameterSpaceParameterType" AS ENUM ('Range', 'Choice', 'Fixed');

-- CreateEnum
CREATE TYPE "EnumParameterSpaceValueType" AS ENUM ('BOOL', 'FLOAT', 'INT', 'STRING');

-- CreateTable
CREATE TABLE "User" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT,
    "id" TEXT NOT NULL,
    "lastName" TEXT,
    "password" TEXT NOT NULL,
    "roles" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experiment" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "goal" "EnumExperimentGoal" NOT NULL,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "User" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Experiment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParameterSpace" (
    "bounds" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "name" TEXT,
    "parameterType" "EnumParameterSpaceParameterType" NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "valueType" "EnumParameterSpaceValueType",

    CONSTRAINT "ParameterSpace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ExperimentToParameterSpace" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Experiment_User_key" ON "Experiment"("User");

-- CreateIndex
CREATE UNIQUE INDEX "_ExperimentToParameterSpace_AB_unique" ON "_ExperimentToParameterSpace"("A", "B");

-- CreateIndex
CREATE INDEX "_ExperimentToParameterSpace_B_index" ON "_ExperimentToParameterSpace"("B");

-- AddForeignKey
ALTER TABLE "Experiment" ADD CONSTRAINT "Experiment_User_fkey" FOREIGN KEY ("User") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExperimentToParameterSpace" ADD CONSTRAINT "_ExperimentToParameterSpace_A_fkey" FOREIGN KEY ("A") REFERENCES "Experiment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExperimentToParameterSpace" ADD CONSTRAINT "_ExperimentToParameterSpace_B_fkey" FOREIGN KEY ("B") REFERENCES "ParameterSpace"("id") ON DELETE CASCADE ON UPDATE CASCADE;
