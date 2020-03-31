import { Controller, Get, Post, Req, Delete, Body, Logger, Query, Param } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobRole, JobType } from 'src/database/models/job.entity';

export class CreateJobDto {
  title: string;
  role: JobRole;
  type: JobType;
  description: string;
  applicationLink: string;
  companyId: string;
  sponsored: boolean;
}

@Controller('jobs')
export class JobsController {

  constructor(private jobService: JobsService) {
  }

  @Get('all')
  all(@Req() req: any): Promise<any> {
    return this.jobService.findAll(req.pagination);
  }

  // TODO: Create a job
  @Post('create')
  createJob(@Body() createJobDto: CreateJobDto) {
    return this.jobService.create(createJobDto);
  }

  // TODO: set deleted to true on job object
  @Delete(':id')
  deleteJob(@Param() { id }) {
    return this.jobService.delete(id);
  }

  @Get(':id')
  getJob(@Param() { id }) {
    return this.jobService.find(id);
  }

}
