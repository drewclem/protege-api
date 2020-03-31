import { Controller, Get, Post, Req, Delete, Body, Logger, Query } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobRole, JobType } from 'src/database/models/job.entity';

export class CreateJobDto {
  title: string;
  role: JobRole;
  type: JobType;
  description: string;
  applicationLink: string;
  companyId: number;
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
  @Delete('delete')
  deleteJob(@Query('id') jobId: number) {
    return this.jobService.delete(jobId);
  }

}
