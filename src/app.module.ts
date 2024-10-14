import { Module } from '@nestjs/common';

import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { ClienteModule } from './cliente/cliente.module';
import { LivroModule } from './livro/livro.module';
import { AluguelModule } from './aluguel/aluguel.module';

@Module({
  imports: [BibliotecaModule, ClienteModule, LivroModule, AluguelModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
