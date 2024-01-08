/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Brand` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Brand` table. All the data in the column will be lost.
  - You are about to drop the `Article` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Car` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Brand` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Brand" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "logo" TEXT;

-- DropTable
DROP TABLE "Article";

-- DropTable
DROP TABLE "Car";

-- CreateTable
CREATE TABLE "LegoCar" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT,
    "brandId" INTEGER NOT NULL,

    CONSTRAINT "LegoCar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LegoCar_name_key" ON "LegoCar"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "Brand"("name");
