import prismaClient from "../../prisma"

interface AgendamentoResquest {
    id: number;
}

class DeletarAgendamentoService {
    async execute({ id }: AgendamentoResquest) {
        const cancelar = await prismaClient.agendamento.delete({
            where: {
                id: id
            }
        })
        return cancelar;
    }
}

export { DeletarAgendamentoService }