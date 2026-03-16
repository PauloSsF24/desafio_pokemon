import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async register(data) {
    const hashed = await bcrypt.hash(data.password, 10);

    const user = await this.usersService.create({
      ...data,
      password: hashed,
    });

    return user;
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) throw new UnauthorizedException();

    const match = await bcrypt.compare(password, user.password);

    if (!match) throw new UnauthorizedException();

    const token = this.jwtService.sign({
      sub: user.id,
      email: user.email,
    });

    return { access_token: token };
  }

  async getUsers() {
    return this.usersService.findAll();
  }
}