import { Request,Response } from "express";
import { DeletarServicoService } from "../../services/servico/DeletarServicoService";


class DeletarServicoController{
    async handle(req:Request, res:Response){
        const id = req.query.id as string;

        const deletarServico = new DeletarServicoService();

        const servico = await deletarServico.execute({id});

        return res.json(servico);
    }
}

export {DeletarServicoController}