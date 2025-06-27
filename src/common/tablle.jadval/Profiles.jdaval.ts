import {
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { User } from './user.model';

@Table({ tableName: 'profile' })
export class Profile extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  user_id: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID })
  userId: string;

  @Column({ type: DataType.STRING, allowNull: true })
  full_name: string;

  @Column({ type: DataType.STRING, allowNull: true })
  country: string;

  @Column({ type: DataType.STRING, allowNull: true })
  phone: string;
}
