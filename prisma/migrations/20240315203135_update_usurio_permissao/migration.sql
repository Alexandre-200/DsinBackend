/*
  Warnings:

  - You are about to drop the column `nivel` on the `usuarios` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "nivel",
ADD COLUMN     "permissao" BOOLEAN NOT NULL DEFAULT false;
