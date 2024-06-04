import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Setting } from './setting.model';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'accounts',
})
export class Account extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @HasMany(() => Setting)
  settings: Setting[];
}
