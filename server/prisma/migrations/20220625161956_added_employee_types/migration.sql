-- AlterTable
ALTER TABLE `Employees` ADD COLUMN `employee_type` ENUM('super_admin', 'admin', 'employee') NOT NULL DEFAULT 'employee';
