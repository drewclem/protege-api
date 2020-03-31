import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Company } from './company.entity';

export enum JobRole {
  Frontend = 'Frontend',
  Backend = 'Backend',
  Fullstack = 'Fullstack',
}

export enum JobType {
  FullTime = 'FullTime',
  PartTime = 'PartTime',
  Contract = 'Contract',
}

@Table
export class Job extends Model<Job> {
  @Column
  title: string;

  @Column(DataType.ENUM('Frontend', 'Backend', 'Fullstack'))
  role: JobRole;

  @Column(DataType.ENUM('FullTime', 'PartTime', 'Contract'))
  type: JobType;

  @Column
  description: string;

  @Column
  applicationLink: string;

  @ForeignKey(() => Company)
  @Column
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;

  @Column
  approved: boolean;

  @Column
  sponsored: boolean;
}