import { Module } from '@nestjs/common';
import { AluguelService } from './aluguel.service';
import { AluguelController } from './aluguel.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  providers: [AluguelService, PrismaService],
  controllers: [AluguelController]
})
export class AluguelModule {}
