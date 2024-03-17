import { Request, Response } from "express";
import { CriarAgendamentoService } from "../../services/agendamento/CriarAgendamentoService";

class CriarAgendamentoController {
    async handle(req: Request, res: Response) {
        const { usuario_id, servico_id, data_agendamento } = req.body;
        console.log(usuario_id);
        console.log(servico_id);
        console.log(data_agendamento);

        const criar = new CriarAgendamentoService();

        const agendamento = await criar.execute({ usuario_id, servico_id, data_agendamento });

        return res.json(agendamento)
    }
}

export { CriarAgendamentoController }