import { Controller, Request, Post, UseGuards, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('auth/login')
  async login(@Query('username') username: String, @Query('password') password: String) {
    return this.authService.login(username, password);
  }
}