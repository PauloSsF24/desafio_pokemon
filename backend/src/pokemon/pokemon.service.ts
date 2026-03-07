import { Injectable, ForbiddenException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PokemonService {
  constructor(private prisma: PrismaService) {}

  create(data, userId: number) {
    return this.prisma.pokemon.create({
      data: {
        ...data,
        ownerId: userId,
      },
    });
  }

  findAll() {
    return this.prisma.pokemon.findMany();
  }

  async update(id: string, data, userId) {
    const pokemon = await this.prisma.pokemon.findUnique({ where: { id } });

    if (!pokemon || pokemon.ownerId !== userId) {
      throw new ForbiddenException();
    }

    return this.prisma.pokemon.update({
      where: { id },
      data,
    });
  }

  async delete(id: string, userId) {
    const pokemon = await this.prisma.pokemon.findUnique({ where: { id } });

    if (!pokemon || pokemon.ownerId !== userId) {
      throw new ForbiddenException();
    }

    return this.prisma.pokemon.delete({
      where: { id },
    });
  }
}