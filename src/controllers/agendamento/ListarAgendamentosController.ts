import { Request, Response } from "express";
import { ListarAgendamentosService } from "../../services/agendamento/ListarAgendamentosService";

class ListarAgendamentosController {
    async handle(req: Request, res: Response) {
        const agendamentos = new ListarAgendamentosService();

        const todosAgendamentos = await agendamentos.execute();

        return res.json(todosAgendamentos);
    }
}

export { ListarAgendamentosController }