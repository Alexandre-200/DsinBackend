/*
  Warnings:

  - The primary key for the `agendamentos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `agendamentos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `servicos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `servicos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `usuarios` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `usuario_id` on the `agendamentos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `servico_id` on the `agendamentos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "agendamentos" DROP CONSTRAINT "agendamentos_servico_id_fkey";

-- DropForeignKey
ALTER TABLE "agendamentos" DROP CONSTRAINT "agendamentos_usuario_id_fkey";

-- AlterTable
ALTER TABLE "agendamentos" DROP CONSTRAINT "agendamentos_pkey",
DROP COLUMN "usuario_id",
ADD COLUMN     "usuario_id" INTEGER NOT NULL,
DROP COLUMN "servico_id",
ADD COLUMN     "servico_id" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "agendamentos_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "servicos" DROP CONSTRAINT "servicos_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "servicos_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "agendamentos" ADD CONSTRAINT "agendamentos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agendamentos" ADD CONSTRAINT "agendamentos_servico_id_fkey" FOREIGN KEY ("servico_id") REFERENCES "servicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
