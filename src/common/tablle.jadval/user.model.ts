import {
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Tarif, UserRole } from 'src/global/type/user';

@Table({ tableName: 'users' })
export class User extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  user_id: string;

  @Column
  username: string;

  @Column
  password: string;

  @Column
  email: string;

  @Column({
    type: DataType.ENUM(...Object.values(UserRole)),
    defaultValue: UserRole.User,
  })
  role: UserRole;

  @Column({
    type: DataType.ENUM(...Object.values(Tarif)),
    defaultValue: Tarif.free,
  })
  TARIF: Tarif;
}
