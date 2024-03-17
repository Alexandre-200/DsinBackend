import { Request, Response } from "express";
import { ListarServicosService } from "../../services/servico/ListarServicosServise";

class ListarServicosController {
    async handle(req: Request, res: Response) {
        const servicos = new ListarServicosService();
        const todosServicos = await servicos.execute();

        return res.json(todosServicos);
    }
}

export { ListarServicosController }