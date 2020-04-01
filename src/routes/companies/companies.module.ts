import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Company } from 'src/database/models/company.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([ Company ]),
  ],
  providers: [CompaniesService],
  controllers: [CompaniesController]
})
export class CompaniesModule {}
