import { Injectable } from "@nestjs/common";
import * as dotenv from 'dotenv';
import * as fs from 'fs';

@Injectable()
export class ConfigService {
  private readonly envConfig: any;

  constructor() {
    this.envConfig = dotenv.parse(fs.readFileSync(`${process.env.NODE_ENV}.env`));
  }

  get database() {
    return {
      host: this.envConfig.DATABASE_HOST || '',
      port: this.envConfig.DATABASE_PORT || 5432,
      username: this.envConfig.DATABASE_USERNAME || '',
      password: this.envConfig.DATABASE_PASSWORD || '',
      name: this.envConfig.DATABASE_NAME || '',
    };
  }
}