import prismaClient from "../../prisma"

interface ServicoRequest {
    id: string
}

class DeletarServicoService {
    async execute({ id }: ServicoRequest) {

        const agenda = await prismaClient.agendamento.findFirst({
            where: {
                servico_id: id
            }
        })

        if (agenda) {
            throw new Error("Serviço Agendado, nõa é possivel excluir");
        }

        const deletarServico = await prismaClient.servico.delete({
            where: {
                id: id
            }
        })

        return deletarServico;
    }
}

export { DeletarServicoService }