import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from 'src/config/config.service';
import { Job } from './models/job.entity';
import { Company } from './models/company.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: configService.database.host,
        port: configService.database.port,
        username: configService.database.username,
        password: configService.database.password,
        database: configService.database.name,
        dialectOptions: {
          ssl: {
            rejectUnauthorized: false,
          }
        }
      });
      sequelize.addModels([ Company, Job ]);
      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];