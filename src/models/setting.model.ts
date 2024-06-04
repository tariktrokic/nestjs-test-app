import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Account } from './account.model';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'settings',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
})
export class Setting extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  data_type: string;

  @ForeignKey(() => Account)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  account_id: number;

  @BelongsTo(() => Account)
  account: Account;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  value: string;
}
