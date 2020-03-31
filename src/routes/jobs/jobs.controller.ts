import { Controller, Get, Post, Req, Delete } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {

  constructor(private jobService: JobsService) {
  }

  @Get('all')
  all(@Req() req: any): Promise<any> {
    return this.jobService.findAll(req.pagination);
  }

  @Post()
  createJob() {
    return [];
  }

}
