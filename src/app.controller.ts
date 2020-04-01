import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  welcome(): string {
    return 'API Online';
  }
}
