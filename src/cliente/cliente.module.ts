import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  providers: [ClienteService, PrismaService],
  controllers: [ClienteController]
})
export class ClienteModule {}
