import { Request, Response } from "express";
import { CriarServicoService } from "../../services/servico/CriarServicoService";

class CriarServicoController {
    async handle(req: Request, res: Response) {

        const { nome, preco,ativo } = req.body;
        const criarServicoService = new CriarServicoService();

        const servico = await criarServicoService.execute({ nome, preco,ativo });

        return res.json(servico);
    }
}

export { CriarServicoController }