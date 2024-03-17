import prismaClient from "../../prisma";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface LogarRequest {
    cpf: string;
    senha: string;
}

class LogarUsuarioService {
    async execute({ cpf, senha }: LogarRequest) {

        const usuarioLogado = await prismaClient.usuario.findFirst({
            where: {
                cpf: cpf
            }
        })

        if (!usuarioLogado) {
            throw new Error("Usúario/ Senha incorreta")
        }

        const usuarioSenha = await compare(senha, usuarioLogado.senha);

        if (!usuarioSenha) {
            throw new Error("Usúario/ Senha incorreta")
        }

        const token = sign({
            nome: usuarioLogado.nome+"",
            telefone: usuarioLogado.telefone+"",
            permissao: usuarioLogado.permissao+""
        }, process.env.CHAVE_JWT, {
            subject: usuarioLogado.id+"",
            expiresIn: '7d'
        }

        )

        return { 
            id: usuarioLogado.id,
            nome: usuarioLogado.nome,
            telefone: usuarioLogado.telefone,
            permissao:usuarioLogado.permissao,
            token:token
        }
    }
}

export { LogarUsuarioService };