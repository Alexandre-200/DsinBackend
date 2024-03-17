/*
  Warnings:

  - You are about to drop the column `created_at` on the `agendamentos` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `agendamentos` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `servicos` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `servicos` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `usuarios` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "agendamentos" DROP COLUMN "created_at",
DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "servicos" DROP COLUMN "created_at",
DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "created_at",
DROP COLUMN "updated_at";
