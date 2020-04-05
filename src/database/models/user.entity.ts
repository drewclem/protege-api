import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Company } from "./company.entity";

@Table
export class User extends Model<User> {
  @Column({
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    type: DataType.UUID
  }) public id: string;
  
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  verified: boolean;

  // We'll create the user, create the company, update the user with the created company uuid

  @ForeignKey(() => Company)
  @Column({
    type: DataType.UUID
  })
  companyId: string;

  @BelongsTo(() => Company)
  company: Company;
}