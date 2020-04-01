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
  @Column({
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    type: DataType.UUID
  }) public id: string;

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
  @Column({
    type: DataType.UUID
  })
  companyId: string;

  @BelongsTo(() => Company)
  company: Company;

  @Column
  approved: boolean;

  @Column
  deleted: boolean;

  @Column
  sponsored: boolean;
}