import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BibliotecaService } from './biblioteca.service';
import { Prisma } from '@prisma/client';

@Controller('bibliotecas')
export class BibliotecaController {
    constructor(private readonly bibliotecaService: BibliotecaService) { }

    @Post()
    create(@Body() createBibliotecaDto: Prisma.BibliotecaCreateInput) {
        return this.bibliotecaService.create(createBibliotecaDto);
    }

    @Get()
    findAll() {
        return this.bibliotecaService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.bibliotecaService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateBibliotecaDto: Prisma.BibliotecaUpdateInput) {
        return this.bibliotecaService.update(+id, updateBibliotecaDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.bibliotecaService.remove(+id);
    }
}
