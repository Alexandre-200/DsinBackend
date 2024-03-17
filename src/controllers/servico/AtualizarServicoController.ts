import { Request,Response } from "express";
import { AtualizarServicoService } from "../../services/servico/AtualizarServicoService";

class AtualizarServicoController{
    async handle(req:Request, res:Response){

        const {id, nome, preco, ativo} = req.body 
        const atualizarServico = new AtualizarServicoService();

        const servico = await atualizarServico.execute({id,nome,preco, ativo});

        return res.json(servico)
    }
}

export {AtualizarServicoController}