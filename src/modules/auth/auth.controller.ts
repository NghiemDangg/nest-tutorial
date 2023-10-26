import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  //some request from client
  @Post('register') //register a new user
  register() {
    return this.authService.register();
  }

  @Post('login') //user login
  login() {
    return this.authService.login();
  }
}
