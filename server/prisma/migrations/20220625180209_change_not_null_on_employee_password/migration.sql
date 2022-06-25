/*
  Warnings:

  - Made the column `password` on table `Employees` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Employees` MODIFY `password` VARCHAR(191) NOT NULL;
