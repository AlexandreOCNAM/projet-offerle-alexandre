/*
  Warnings:

  - Added the required column `release` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "release" TIMESTAMP(3) NOT NULL;
