import prismaClient from "../../prisma";


class ListarUsuariosService {
    async execute() {
        const usuarios = await prismaClient.usuario.findMany({
            select: {
                id: true, 
                nome: true,
                telefone:true
            }
        })

        return usuarios;
    }
}

export { ListarUsuariosService }