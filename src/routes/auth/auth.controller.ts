import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {

  }
  
  @Get('verify')
  findAll(): string {
    return 'This action returns all cats';
  }
  
}
