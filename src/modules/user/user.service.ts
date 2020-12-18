import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';

import { PrismaService } from '../../prisma.service';

import { UserValidator } from '../../helper/validator';

import { UserDto } from '../../dto/user.dto';

interface UserUpdateParams {
    data: UserDto,
    where: Prisma.UserWhereUniqueInput
}

@Injectable()
export class UserService {
    constructor(
        private prisma: PrismaService,
        private validator: UserValidator
    ) { }

    public async findAll(): Promise<User[]> {
        return await this.prisma.user.findMany({});
    }

    public async find(where: Prisma.UserWhereUniqueInput): Promise<User | null> {
        return await this.prisma.user.findUnique({ where });
    }

    public async create(data: UserDto): Promise<User> {
        if (!this.validator.isValid(data)) {
            throw "User create data are invalid.";
        }
        return await this.prisma.user.create({ data });
    }

    public async update(params: UserUpdateParams): Promise<User> {
        if (!this.validator.isValid(params.data)) {
            throw "User update data are invalid.";
        }
        return await this.prisma.user.update(params);
    }

    public async delete(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return await this.prisma.user.delete({ where });
    }
}
