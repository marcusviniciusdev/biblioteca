import { Module } from '@nestjs/common';
import { BibliotecaService } from './biblioteca.service';
import { BibliotecaController } from './biblioteca.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  providers: [BibliotecaService, PrismaService],
  controllers: [BibliotecaController],
})
export class BibliotecaModule { }
