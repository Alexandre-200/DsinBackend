import prismaClient from "../../prisma";



class ListaUsuarioService {
    async execute(usuario_id: number) {

        const usuario = await prismaClient.usuario.findFirst({
            where: {
                id: usuario_id
            },select: {
                id: true,
                nome: true,
                telefone: true,
                permissao: true
            }
        })

        return usuario;
    }
}

export { ListaUsuarioService }