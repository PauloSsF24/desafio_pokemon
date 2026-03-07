import { Controller, Get, Post, Body, Param, Delete, Patch } from "@nestjs/common";
import { PokemonService } from "./pokemon.service";

@Controller("pokemons")
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Get()
  findAll() {
    return this.pokemonService.findAll();
  }

  @Post()
  create(@Body() body) {
    return this.pokemonService.create(body, body.userId);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() body) {
    return this.pokemonService.update(id, body, body.userId);
  }

  @Delete(":id")
  remove(@Param("id") id: string, @Body() body) {
    return this.pokemonService.delete(id, body.userId);
  }
}