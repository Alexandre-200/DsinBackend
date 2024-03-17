import prismaClient from "../../prisma";

interface ServicoRequest {
    id: string;
    nome: string;
    preco: string;
    ativo: boolean;
}

class AtualizarServicoService {
    async execute({ id, nome, preco, ativo }: ServicoRequest) {
       

        const atualizaServico = await prismaClient.servico.update({
            where: {
                id: id
            }, data: {
                nome: nome,
                preco: preco,
                ativo: ativo
            }
        })

        return atualizaServico;
    }
}

export { AtualizarServicoService }
