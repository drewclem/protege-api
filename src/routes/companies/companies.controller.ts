import { Controller, Post, Req, Logger, Get } from '@nestjs/common';
import { Request } from 'express';
import { CompaniesService } from './companies.service';

@Controller('companies')
export class CompaniesController {

  constructor(private companyService: CompaniesService) {
  }

  @Get()
  all(@Req() req: any) {
    return this.companyService.getAll(req.pagination);
  }

  @Post()
  create(@Req() req: Request) {
    const { name, website, email, logo, description } = req.body;
    return this.companyService.create({
      name,
      website,
      email,
      logo,
      description,
    });
  }

}
