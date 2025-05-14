/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Post` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Experience` MODIFY `image` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `Formation` MODIFY `image` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `Projet` MODIFY `image` LONGTEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Post_slug_key` ON `Post`(`slug`);
