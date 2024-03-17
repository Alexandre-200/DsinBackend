import { Request, Response } from 'express';
import { CriarUsuarioService } from '../../services/usuario/CriarUsuarioService'

class CriarUsuarioController {
    async handle(req: Request, res: Response) {
        const { nome, senha, telefone, permissao,cpf } = req.body

        const criarUsuarioService = new CriarUsuarioService();

        const usuario = await criarUsuarioService.execute({ nome, senha, telefone, permissao,cpf });

        return res.json(usuario)
    }
}

export { CriarUsuarioController }