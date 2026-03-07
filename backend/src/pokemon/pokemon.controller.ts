import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Req,
  UseGuards,
} from "@nestjs/common";

import { PokemonService } from "./pokemon.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller("pokemons")
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Get()
  findAll() {
    return this.pokemonService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() data: any, @Req() req: any) {
    const userId = req.user.id;

    return this.pokemonService.create(data, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() body, @Req() req: any) {
    return this.pokemonService.update(id, body, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string, @Req() req: any) {
    return this.pokemonService.delete(id, req.user.id);
  }
}