import prismaClient from "../../prisma";

class ListarServicosService {
    async execute() {
        const servicos = await prismaClient.servico.findMany({
            select: {
                id: true,
                nome: true,
                preco: true,
                ativo:true
            }
        })
        return servicos;
    }

} export { ListarServicosService }