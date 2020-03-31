import { Table, Column, HasMany, Model } from "sequelize-typescript";
import { Job } from "./job.entity";

@Table
export class Company extends Model<Company> {
  @Column
  name: string;

  @Column
  website: string;

  @Column
  email: string;

  @Column
  logo: string;

  @Column
  description: string;

  @HasMany(() => Job)
  jobs: Job[];
}