import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';
import { ConfigService } from 'src/config/config.service';

@Module({
  imports: [ ConfigService ],
  providers: [
    ConfigService,
    ...databaseProviders,
  ],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
