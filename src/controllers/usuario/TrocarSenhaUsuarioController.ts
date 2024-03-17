import { Request, Response } from 'express';
import { TrocarSenhaUsuarioService } from '../../services/usuario/TrocarSenhaUsuarioService'

class TrocarSenhaUsuarioController {
    async handle(req: Request, res: Response) {
        const {senha,cpf } = req.body
        console.log("Senha",senha)
        const trocarSenha = new TrocarSenhaUsuarioService();

        const usuario = await trocarSenha.execute({  senha, cpf });

        return res.json(usuario)
    }
}

export { TrocarSenhaUsuarioController }