/*
  Warnings:

  - You are about to drop the `_AuthorToEmployees` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `employee_id` to the `Author` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_AuthorToEmployees` DROP FOREIGN KEY `_AuthorToEmployees_A_fkey`;

-- DropForeignKey
ALTER TABLE `_AuthorToEmployees` DROP FOREIGN KEY `_AuthorToEmployees_B_fkey`;

-- AlterTable
ALTER TABLE `Author` ADD COLUMN `employee_id` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_AuthorToEmployees`;

-- AddForeignKey
ALTER TABLE `Author` ADD CONSTRAINT `Author_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `Employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
