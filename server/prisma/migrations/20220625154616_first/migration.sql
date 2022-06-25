-- CreateTable
CREATE TABLE `Books` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NULL,
    `ISBN` INTEGER NULL,
    `summary` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `publisher` VARCHAR(191) NULL,
    `no_of_copies` INTEGER NULL,
    `sources` VARCHAR(191) NULL,
    `price` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Author` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `biography` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employees` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `bio` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `phone_number` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `nrc` VARCHAR(191) NULL,
    `dob` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `profile_picture` VARCHAR(191) NULL,
    `barcode` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `bio` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `phone_number` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `nrc` VARCHAR(191) NULL,
    `dob` VARCHAR(191) NULL,
    `gender` VARCHAR(191) NULL,
    `profile_picture` VARCHAR(191) NULL,
    `barcode` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IssueRecord` (
    `id` VARCHAR(191) NOT NULL,
    `issue_date` DATETIME(3) NULL,
    `due_date` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReturnRecord` (
    `id` VARCHAR(191) NOT NULL,
    `return_date` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_BooksToIssueRecord` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_BooksToIssueRecord_AB_unique`(`A`, `B`),
    INDEX `_BooksToIssueRecord_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_BooksToReturnRecord` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_BooksToReturnRecord_AB_unique`(`A`, `B`),
    INDEX `_BooksToReturnRecord_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_BooksToEmployees` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_BooksToEmployees_AB_unique`(`A`, `B`),
    INDEX `_BooksToEmployees_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AuthorToBooks` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_AuthorToBooks_AB_unique`(`A`, `B`),
    INDEX `_AuthorToBooks_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AuthorToEmployees` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_AuthorToEmployees_AB_unique`(`A`, `B`),
    INDEX `_AuthorToEmployees_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_EmployeesToIssueRecord` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_EmployeesToIssueRecord_AB_unique`(`A`, `B`),
    INDEX `_EmployeesToIssueRecord_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_EmployeesToReturnRecord` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_EmployeesToReturnRecord_AB_unique`(`A`, `B`),
    INDEX `_EmployeesToReturnRecord_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_EmployeesToUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_EmployeesToUser_AB_unique`(`A`, `B`),
    INDEX `_EmployeesToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_IssueRecordToUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_IssueRecordToUser_AB_unique`(`A`, `B`),
    INDEX `_IssueRecordToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ReturnRecordToUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ReturnRecordToUser_AB_unique`(`A`, `B`),
    INDEX `_ReturnRecordToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_BooksToIssueRecord` ADD CONSTRAINT `_BooksToIssueRecord_A_fkey` FOREIGN KEY (`A`) REFERENCES `Books`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BooksToIssueRecord` ADD CONSTRAINT `_BooksToIssueRecord_B_fkey` FOREIGN KEY (`B`) REFERENCES `IssueRecord`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BooksToReturnRecord` ADD CONSTRAINT `_BooksToReturnRecord_A_fkey` FOREIGN KEY (`A`) REFERENCES `Books`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BooksToReturnRecord` ADD CONSTRAINT `_BooksToReturnRecord_B_fkey` FOREIGN KEY (`B`) REFERENCES `ReturnRecord`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BooksToEmployees` ADD CONSTRAINT `_BooksToEmployees_A_fkey` FOREIGN KEY (`A`) REFERENCES `Books`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BooksToEmployees` ADD CONSTRAINT `_BooksToEmployees_B_fkey` FOREIGN KEY (`B`) REFERENCES `Employees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AuthorToBooks` ADD CONSTRAINT `_AuthorToBooks_A_fkey` FOREIGN KEY (`A`) REFERENCES `Author`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AuthorToBooks` ADD CONSTRAINT `_AuthorToBooks_B_fkey` FOREIGN KEY (`B`) REFERENCES `Books`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AuthorToEmployees` ADD CONSTRAINT `_AuthorToEmployees_A_fkey` FOREIGN KEY (`A`) REFERENCES `Author`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AuthorToEmployees` ADD CONSTRAINT `_AuthorToEmployees_B_fkey` FOREIGN KEY (`B`) REFERENCES `Employees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EmployeesToIssueRecord` ADD CONSTRAINT `_EmployeesToIssueRecord_A_fkey` FOREIGN KEY (`A`) REFERENCES `Employees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EmployeesToIssueRecord` ADD CONSTRAINT `_EmployeesToIssueRecord_B_fkey` FOREIGN KEY (`B`) REFERENCES `IssueRecord`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EmployeesToReturnRecord` ADD CONSTRAINT `_EmployeesToReturnRecord_A_fkey` FOREIGN KEY (`A`) REFERENCES `Employees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EmployeesToReturnRecord` ADD CONSTRAINT `_EmployeesToReturnRecord_B_fkey` FOREIGN KEY (`B`) REFERENCES `ReturnRecord`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EmployeesToUser` ADD CONSTRAINT `_EmployeesToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Employees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EmployeesToUser` ADD CONSTRAINT `_EmployeesToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_IssueRecordToUser` ADD CONSTRAINT `_IssueRecordToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `IssueRecord`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_IssueRecordToUser` ADD CONSTRAINT `_IssueRecordToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ReturnRecordToUser` ADD CONSTRAINT `_ReturnRecordToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `ReturnRecord`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ReturnRecordToUser` ADD CONSTRAINT `_ReturnRecordToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
