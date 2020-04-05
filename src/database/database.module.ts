import { Module } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from 'src/config/config.module';
import { Job } from './models/job.entity';
import { Company } from './models/company.entity';
import { User } from './models/user.entity';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ ConfigModule ],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.database.host,
        port: configService.database.port,
        username: configService.database.username,
        password: configService.database.password,
        database: configService.database.name,
        autoLoadModels: true,
        synchronize: true,
        dialectOptions: {
          ssl: {
            rejectUnauthorized: false,
          }
        }
      }),
      inject: [ ConfigService ],
    }),
  ],
  exports: [
    Job,
    User,
    Company,
  ]
})
export class DatabaseModule {}
