/*
  Warnings:

  - You are about to drop the column `brandId` on the `LegoCar` table. All the data in the column will be lost.
  - You are about to drop the `Brand` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `username` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "LegoCar" DROP COLUMN "brandId";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" SET NOT NULL;

-- DropTable
DROP TABLE "Brand";

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
