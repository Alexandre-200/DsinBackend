/*
  Warnings:

  - You are about to drop the column `data` on the `agendamentos` table. All the data in the column will be lost.
  - Added the required column `data_agendamento` to the `agendamentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "agendamentos" DROP COLUMN "data",
ADD COLUMN     "data_agendamento" TEXT NOT NULL;
