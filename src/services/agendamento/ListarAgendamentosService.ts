import prismaClient from "../../prisma";

class ListarAgendamentosService {
    async execute() {
        const agendamentos = await prismaClient.agendamento.findMany({
            include: {
                usuario: true,
                servico: true
            },
        }

        )
        console.log(agendamentos)
        return agendamentos;
    }
}

export { ListarAgendamentosService }