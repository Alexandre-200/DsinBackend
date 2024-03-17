import { Request, Response } from "express";
import { ListaUsuarioService } from "../../services/usuario/ListaUsuarioService";

class ListaUsuarioController {
    async handle(req: Request, res: Response) {
        const numero = req.usuario_id ;

        const usuario_id = parseInt(numero+"");

        const detalhes = new ListaUsuarioService();

        const usuario = await detalhes.execute(usuario_id);

        return res.json(usuario);
    }
}

export { ListaUsuarioController }