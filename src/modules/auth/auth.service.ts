import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { User, Note } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  register(): any {
    return { message: 'register user!' };
  }
  login(): any {
    return { message: 'login to your account!' };
  }
}
