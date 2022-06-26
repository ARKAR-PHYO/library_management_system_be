/*
  Warnings:

  - You are about to drop the `_AuthorToBooks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BooksToEmployees` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `author_id` to the `Books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_id` to the `Books` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_AuthorToBooks` DROP FOREIGN KEY `_AuthorToBooks_A_fkey`;

-- DropForeignKey
ALTER TABLE `_AuthorToBooks` DROP FOREIGN KEY `_AuthorToBooks_B_fkey`;

-- DropForeignKey
ALTER TABLE `_BooksToEmployees` DROP FOREIGN KEY `_BooksToEmployees_A_fkey`;

-- DropForeignKey
ALTER TABLE `_BooksToEmployees` DROP FOREIGN KEY `_BooksToEmployees_B_fkey`;

-- AlterTable
ALTER TABLE `Books` ADD COLUMN `author_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `employee_id` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_AuthorToBooks`;

-- DropTable
DROP TABLE `_BooksToEmployees`;

-- AddForeignKey
ALTER TABLE `Books` ADD CONSTRAINT `Books_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `Author`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Books` ADD CONSTRAINT `Books_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `Employees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
