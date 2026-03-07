import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule], // 👈 aqui
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}