import { Injectable, Logger } from '@nestjs/common';
import { Job } from 'src/database/models/job.entity';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class JobsService {

  constructor(
    private sequelize: Sequelize
  ) { }

  async findAll(pagination?: any) {
    return this.sequelize.model(Job).findAll({
      ...pagination,
    });
  }

}
