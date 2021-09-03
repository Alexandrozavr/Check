-- CreateTable
CREATE TABLE `data_bases` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `data_bases.title_unique`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `list` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `father_id` INTEGER NOT NULL,

    UNIQUE INDEX `list.title_unique`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `object` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `adress` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `list_id` INTEGER NOT NULL,

    UNIQUE INDEX `object.title_unique`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `list` ADD FOREIGN KEY (`father_id`) REFERENCES `data_bases`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `object` ADD FOREIGN KEY (`list_id`) REFERENCES `list`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
