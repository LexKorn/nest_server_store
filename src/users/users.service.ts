import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { AddRoleDto } from './dto/add-role.dto';


@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private usersRepository: typeof User) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.usersRepository.create(dto);
        return user;
    }

    async getAllUsers() {
        const users = await this.usersRepository.findAll();
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.usersRepository.findOne({where: {email}});
        return user;
    }

    addRole(dto: AddRoleDto) {
        throw new Error('Method not implemented.');
    }
};