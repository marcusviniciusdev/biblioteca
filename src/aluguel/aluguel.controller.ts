import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AluguelService } from './aluguel.service';
import { Prisma, Aluguel } from '@prisma/client';

@Controller('alugueis')
export class AluguelController {
    constructor(private readonly aluguelService: AluguelService) { }

    @Post()
    create(@Body() createAluguelDto: Prisma.AluguelCreateInput) {
        return this.aluguelService.create(createAluguelDto);
    }

    @Get()
    findAll() {
        return this.aluguelService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.aluguelService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateAluguelDto: Prisma.AluguelUpdateInput): Promise<Aluguel> {
        return this.aluguelService.update(+id, updateAluguelDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.aluguelService.remove(+id);
    }

    @Patch(':id/devolver')
    async devolverLivro(@Param('id') id: string): Promise<Aluguel> {
        return this.aluguelService.devolverLivro(+id);
    }

    
}
