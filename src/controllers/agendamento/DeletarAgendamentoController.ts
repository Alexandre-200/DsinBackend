import { Request, Response } from "express";

import { DeletarAgendamentoService } from "../../services/agendamento/DeletarAgendamentoService";

class DeletarAgendamentoController {
    async handle(req: Request, res: Response) {
        const idRecebido = req.query.id as string;
        const id = parseInt(idRecebido);

        console.log("Recevido ",idRecebido)

        const deletadarUsuario = new DeletarAgendamentoService();
        const usuario = await deletadarUsuario.execute({ id });

        return res.json(usuario);
    }
}

export { DeletarAgendamentoController }