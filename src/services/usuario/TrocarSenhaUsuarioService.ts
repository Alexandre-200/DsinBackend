import prismaClient from "../../prisma";
import { hash } from 'bcryptjs'

interface UsuarioRequest {
    cpf: string;
    senha: string;
}

class TrocarSenhaUsuarioService {
    async execute({ senha,cpf}: UsuarioRequest) {


        const senhaHash = await hash(senha, 8);

        const atualizarUsuario = await prismaClient.usuario.update({
            where: {
               cpf:cpf
            }, data: {
                senha:senhaHash
            }
        })
        return atualizarUsuario;
    }
}

export { TrocarSenhaUsuarioService }