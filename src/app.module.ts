import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { BasketsModule } from './baskets/baskets.module';
import { BrandsModule } from './brands/brands.module';
import { DevicesModule } from './devices/devices.module';
import { FilesModule } from './files/files.module';
import { TypezModule } from './typez/typez.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DB,
      models: [],
      autoLoadModels: true
    }),
    UsersModule,
    AuthModule,
    RolesModule,
    BasketsModule,
    BrandsModule,
    DevicesModule,
    FilesModule,
    TypezModule
  ],  
})
export class AppModule {}
