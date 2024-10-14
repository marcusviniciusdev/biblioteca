import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { Biblioteca, Prisma } from '@prisma/client';

@Injectable()
export class BibliotecaService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.BibliotecaCreateInput): Promise<Biblioteca> {
        return this.prisma.biblioteca.create({
            data,
        });
    }

    async findAll(): Promise<Biblioteca[]> {
        return this.prisma.biblioteca.findMany();
    }

    async findOne(id: number): Promise<Biblioteca | null> {
        return this.prisma.biblioteca.findUnique({
            where: { id },
        });
    }

    async update(id: number, data: Prisma.BibliotecaUpdateInput): Promise<Biblioteca> {
        return this.prisma.biblioteca.update({
            where: { id },
            data,
        });
    }

    async remove(id: number): Promise<Biblioteca> {
        return this.prisma.biblioteca.delete({
            where: { id },
        });
    }
}
