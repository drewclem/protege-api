import { Controller, Get, Post, Req, Delete, Body, Param, UseInterceptors } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobRole, JobType } from 'src/database/models/job.entity';
import { ApiProperty } from '@nestjs/swagger';
import { PaginationInterceptor } from 'src/interceptors/pagination.interceptor';

export class CreateJobDto {
  @ApiProperty({
    description: 'The job listing title',
  })
  title: string;

  @ApiProperty({ enum: JobRole })
  role: JobRole;
  
  @ApiProperty({ enum: JobType })
  type: JobType;
  
  @ApiProperty()
  description: string;
  
  @ApiProperty({
    description: 'Link or email for the end user to apply with',
  })
  applicationLink: string;
  
  @ApiProperty({
    description: 'UUID of the company that owns this job post',
  })
  companyId: string;
  
  @ApiProperty({
    description: 'Boolean specifying if the job posting is sponsored',
  })
  sponsored: boolean;
}

@UseInterceptors(new PaginationInterceptor())
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
