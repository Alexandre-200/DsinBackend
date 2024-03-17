/*
  Warnings:

  - The primary key for the `agendamentos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `agendamento_id` on the `agendamentos` table. All the data in the column will be lost.
  - The required column `id` was added to the `agendamentos` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "agendamentos" DROP CONSTRAINT "agendamentos_pkey",
DROP COLUMN "agendamento_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "agendamentos_pkey" PRIMARY KEY ("id");
