import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Company } from 'src/database/models/company.entity';
import { Job } from 'src/database/models/job.entity';

@Injectable()
export class CompaniesService {
  constructor(private sequelize: Sequelize) {}

  getAll(pagination?: any) {
    return this.sequelize.model(Company).findAll({ include: [ Job ], ...pagination });
  }

  // TODO: Define data
  create(data: any) {
    return this.sequelize.model(Company).create(data);
  }
}
