import { Request,Response } from "express";
import { AtualizarUsuarioService } from "../../services/usuario/AtualizarUsuarioService";

class AtualizarUsuarioController{
    async handle(req:Request, res:Response){

        const {id, nome, telefone} = req.body 
        const atualizarUsuario = new AtualizarUsuarioService();

        const usuario = await atualizarUsuario.execute({id,nome,telefone});

        return res.json(usuario)
    }
}

export {AtualizarUsuarioController}