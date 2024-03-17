import prismaClient from "../../prisma"

interface AgendamentoRequest {
    id: number;
   
    confirmado: boolean;
}

class AtualizarAgendamentoService {
    async execute({ id, confirmado }: AgendamentoRequest) {

        const atualizarUsuario = await prismaClient.agendamento.update({
            where: {
                id: id
            },
            data: {
                confirmado:confirmado
            }, select: {
                id: true,
                usuario_id: true,
                servico_id: true,
            }
        })

        return atualizarUsuario;

    }
}

export { AtualizarAgendamentoService }