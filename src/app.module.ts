import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/user/user.module';
import { User } from './common/tablle.jadval/user.model';
import { MailerModule } from './common/maile/mailer.module';
import { RedisModule } from './common/redis/redis.module';
import { ProfilesService } from './modules/profiles/profiles.service';
import { ProfileController } from './modules/profiles/profiles.controller';
import { ProfileModule } from './modules/profiles/profiles.module';
import { Profile } from './common/tablle.jadval/Profiles.jdaval';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        dialect: 'postgres',
        host: config.get<string>('DB_HOS'),
        port: config.get<number>('DB_POT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        autoLoadModels: true,
        synchronize: true,
        models: [User, Profile],
      }),
    }),
    UsersModule,
    MailerModule,
    UsersModule,
    AuthModule,
    RedisModule,
    ProfileModule,
  ],
})
export class AppModule {}
