import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { LivroService } from './livro.service';
import { Prisma } from '@prisma/client';


@Controller('livros')
export class LivroController {
    constructor(private readonly livroService: LivroService) { }

    @Post()
    create(@Body() createLivroDto: Prisma.LivroCreateInput) {
        return this.livroService.create(createLivroDto);
    }

    @Get()
    findAll() {
        return this.livroService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.livroService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateLivroDto: Prisma.LivroUpdateInput) {
        return this.livroService.update(+id, updateLivroDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.livroService.remove(+id);
    }
}
