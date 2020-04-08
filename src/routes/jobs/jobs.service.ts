import { Injectable } from '@nestjs/common';
import { Job } from 'src/database/models/job.entity';
import { Sequelize } from 'sequelize-typescript';
import { CreateJobDto } from './jobs.controller';

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

  async find(id: number) {
    return this.sequelize.model(Job).findOne({
      where: {
        id,
      },
      raw: true,
    });
  }

  async create(createJobDto: CreateJobDto) {
    return this.sequelize.model(Job).create({
      ...createJobDto,
      approved: false,
      deleted: false,
    });
  }

  async delete(jobId: number) {
    return this.sequelize.model(Job).update({ deleted: true }, { where: { id: jobId }});
  }

}
