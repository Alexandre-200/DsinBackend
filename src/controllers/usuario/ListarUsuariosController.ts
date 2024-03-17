import { Response, Request } from "express";
import { ListarUsuariosService } from "../../services/usuario/ListarUsuariosService";


class ListarUsuariosController{
    async handle(req:Request, res: Response){
        const usuarios = new ListarUsuariosService();

        const todosUsuarios = await usuarios.execute();

        return res.json(todosUsuarios);
    }
}

export {ListarUsuariosController}