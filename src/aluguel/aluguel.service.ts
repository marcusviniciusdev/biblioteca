import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { Aluguel, Prisma } from '@prisma/client';

@Injectable()
export class AluguelService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.AluguelCreateInput): Promise<Aluguel> {
        return this.prisma.aluguel.create({
            data,
        });
    }

    async findAll(): Promise<Aluguel[]> {
        return this.prisma.aluguel.findMany();
    }

    async findOne(id: number): Promise<Aluguel | null> {
        return this.prisma.aluguel.findUnique({
            where: { id },
        });
    }

    async update(id: number, data: Prisma.AluguelUpdateInput): Promise<Aluguel> {
        return this.prisma.aluguel.update({
            where: { id },
            data,
        });
    }

    async remove(id: number): Promise<Aluguel> {
        return this.prisma.aluguel.delete({
            where: { id },
        });
    }

    async devolverLivro(aluguelId: number): Promise<Aluguel> {
        return this.prisma.aluguel.update({
            where: { id: aluguelId },
            data: {
                dataDevolucao: new Date(),
            },
        });
    }

  
}
