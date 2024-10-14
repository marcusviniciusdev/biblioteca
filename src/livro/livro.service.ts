import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { Livro, Prisma } from '@prisma/client';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class LivroService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.LivroCreateInput): Promise<Livro> {
        return this.prisma.livro.create({
            data,
        });
    }

    async findAll(): Promise<Livro[]> {
        return this.prisma.livro.findMany();
    }

    async findOne(id: number): Promise<Livro | null> {
        return this.prisma.livro.findUnique({
            where: { id },
        });
    }

    async update(id: number, data: Prisma.LivroUpdateInput): Promise<Livro> {
        return this.prisma.livro.update({
            where: { id },
            data,
        });
    }

    async remove(id: number): Promise<Livro> {
        // Verificar se o livro está associado a algum aluguel
        const alugueis = await this.prisma.aluguel.findMany({
            where: { livroId: id },
        });

        // Se o livro tiver registros de aluguéis, lançamos a BadRequestException
        if (alugueis.length > 0) {
            throw new BadRequestException('Este livro está alugado e não pode ser excluído.');
        }

        // Se não houver aluguéis, prosseguimos com a exclusão do livro
        return this.prisma.livro.delete({
            where: { id },
        });
    }
}
