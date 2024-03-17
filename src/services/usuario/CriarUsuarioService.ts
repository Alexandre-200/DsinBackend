import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface UsuarioRequest {
    nome: string;
    senha: string;
    telefone: string;
    cpf: string;
    permissao: boolean;
}


class CriarUsuarioService {
    async execute({ nome, senha, telefone, permissao,cpf }: UsuarioRequest) {

        const usuarioTelefone = await prismaClient.usuario.findFirst({
            where: {
                telefone: telefone
            }
        })

        if (usuarioTelefone) {
            throw new Error("Usúario já cadastrado.");
        }

        const senhaHash = await hash(senha, 8);

        const usuario = await prismaClient.usuario.create({
            data: {
                nome: nome,
                senha: senhaHash,
                telefone: telefone,
                permissao: permissao,
                cpf:cpf
            },
            select: {
                id: true,
                nome: true,
                telefone: true,
                permissao: true,
                cpf:true
            }
        });
        return { usuario }
    }
}

export { CriarUsuarioService };