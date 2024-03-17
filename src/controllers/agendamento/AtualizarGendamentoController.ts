import { Request, Response } from "express";
import { AtualizarAgendamentoService } from "../../services/agendamento/AtualizarAgendamentoService";

class AtualizarGendamentoController {
    async handle(req:Request, res:Response) {
        const {id, confirmado} = req.body

        const atualizarAgendamento = new AtualizarAgendamentoService();

        const atualizar = await atualizarAgendamento.execute({id, confirmado});

        res.json(atualizar);
    }
}

export { AtualizarGendamentoController }