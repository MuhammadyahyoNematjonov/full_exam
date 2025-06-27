import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../common/tablle.jadval/user.model';
import { Profile } from 'src/common/tablle.jadval/Profiles.jdaval';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectModel(Profile)
    private readonly userModel: typeof Profile,
  ) {}

  async findAll() {
    return this.userModel.findAll();
  }

  async update(id: string, data: Partial<User>) {
    const user = await this.userModel.findOne({ where: { id } });
    if (!user) return { message: 'User not found' };
    return user.update(data);
  }


  async delete(id: string) {
    const user = await this.userModel.findOne({ where: { id } });
    if (!user) return { message: 'User not found' };
    await user.destroy();
    return { message: 'User deleted', user };
  }

}
