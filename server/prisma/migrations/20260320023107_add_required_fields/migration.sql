-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "image" TEXT NOT NULL DEFAULT 'default_image.jpg',
ADD COLUMN     "ingredients" TEXT NOT NULL DEFAULT 'None';
