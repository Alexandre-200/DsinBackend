import prismaClient from "../../prisma";

interface AgendamentoRequest {
    usuario_id: number,
    servico_id: number,
    data_agendamento: string
}

class CriarAgendamentoService {
    async execute({ usuario_id, servico_id, data_agendamento }: AgendamentoRequest) {
        
        const agendamento = await prismaClient.agendamento.create({
            data: {
                usuario_id: usuario_id,
                servico_id: servico_id,
                data_agendamento: data_agendamento
            },
            select: {
                id: true,
                usuario_id: true,
                servico_id: true,
                data_agendamento: true
            }
        })

        return agendamento;
    }
}

export { CriarAgendamentoService }