/*
  Warnings:

  - Made the column `email` on table `Employees` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Employees` MODIFY `email` VARCHAR(191) NOT NULL;
