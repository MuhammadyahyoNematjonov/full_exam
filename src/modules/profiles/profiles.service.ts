import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../global/tablle.jadval/user.model';
import { Profile } from 'src/global/tablle.jadval/Profiles.jdaval';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectModel(Profile)
    private readonly userModel: typeof Profile,
  ) {}

  // 🆕 Create (POST)
  async create(data: Partial<Profile>) {
    const profile = await this.userModel.create(data);
    return profile;
  }

  // Read (GET all)
  async findAll() {
    return this.userModel.findAll();
  }

  // Update (PUT)
  async update(id: string, data: Partial<User>) {
    const user = await this.userModel.findOne({ where: { id } });
    if (!user) return { message: 'User not found' };
    return user.update(data);
  }

  // Delete
  async delete(id: string) {
    const user = await this.userModel.findOne({ where: { id } });
    if (!user) return { message: 'User not found' };
    await user.destroy();
    return { message: 'User deleted', user };
  }
}
