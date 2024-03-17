import prismaClient from "../../prisma";

interface UsuarioRequest {
    id: string;
    nome: string;
    telefone: string;
}

class AtualizarUsuarioService {
    async execute({ id,nome,telefone }: UsuarioRequest) {


        const atualizarUsuario = await prismaClient.usuario.update({
            where: {
                id: id
            }, data: {
                nome: nome,
                telefone: telefone
            }
        })

        return atualizarUsuario;
    }
}

export { AtualizarUsuarioService }