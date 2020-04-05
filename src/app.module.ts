import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './routes/auth/auth.module';
import { JobsModule } from './routes/jobs/jobs.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './routes/users/users.module';
import { PaginationMiddleware } from './middleware/pagination.middleware';
import { CompaniesModule } from './routes/companies/companies.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    JobsModule,
    DatabaseModule,
    CompaniesModule,
  ],
  controllers: [AppController],
  providers: [ ]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PaginationMiddleware)
      .forRoutes('*');
  }
}
