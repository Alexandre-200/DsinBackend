import prismaClient from "../../prisma";

interface ServicoRequest {
    nome: string;
    preco: string;
    ativo: boolean
}

class CriarServicoService {
    async execute({ nome, preco, ativo }: ServicoRequest) {

        if (nome === '') {
            throw new Error("Nome invalido");
        }

        const servico = await prismaClient.servico.create({
            data: {
                nome: nome,
                preco: preco,
                ativo: ativo
            }, select: {
                id: true,
                nome: true,
                preco: true,
                ativo:true
            }
        })
        return { servico }
    }
}
export { CriarServicoService }