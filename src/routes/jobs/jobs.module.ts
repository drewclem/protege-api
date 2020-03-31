import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Job } from 'src/database/models/job.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([ Job ]),
  ],
  providers: [ JobsService ],
  controllers: [ JobsController ]
})
export class JobsModule {}
