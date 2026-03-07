import { Body, Controller, Post, BadRequestException } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("register")
  register(@Body() body) {
    return this.authService.register(body);
  }

  @Post("login")
  login(@Body() body: { email?: string; password?: string }) {
    const { email, password } = body || {};
    if (!email || !password) {
      throw new BadRequestException("Email e senha são obrigatórios");
    }
    return this.authService.login(email, password);
  }
}