import { Request, Response } from 'express';
import { LogarUsuarioService } from '../../services/usuario/LogarUsuarioService'

class LogarUsuarioController {
    async handle(req: Request, res: Response) {
        const { senha, cpf } = req.body

        const logarUsuarioServico = new LogarUsuarioService();

        const logar = await logarUsuarioServico.execute({ cpf, senha });

        return res.json(logar)
    }
}

export { LogarUsuarioController }