import { Table, Column, HasMany, Model, DataType } from "sequelize-typescript";
import { Job } from "./job.entity";

@Table
export class Company extends Model<Company> {
  @Column({
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    type: DataType.UUID
  }) public id: string;
  
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