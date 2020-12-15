import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from '@prisma/client';

import { UserService } from './user.service';

import { BadRequestException } from '../../helper/exception';

import { UserDto } from '../../dto/user.dto';

@Controller('api/user')
export class UserController {
    constructor(
        private userService: UserService
    ) { }

    @Get()
    public async getAll(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Get(':id')
    public async getById(@Param('id') id: string): Promise<User> {
        return await this.userService.find({ id: Number(id) });
    }

    @Post()
    public async post(@Body() data: UserDto): Promise<User> {
        try {
            return await this.userService.create(data);
        } catch (e) {
            throw new BadRequestException(e);
        }
    }

    @Put(':id')
    public async put(@Param('id') id: string, @Body() data: UserDto): Promise<User> {
        if (Number(id) !== data.id) {
            throw new BadRequestException("The 'id' query parameter does not match the 'id' body parameter.");
        }
        try {
            return await this.userService.update({ data, where: { id: Number(id) } });
        } catch (e) {
            throw new BadRequestException(e);
        }
    }

    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<User> {
        return this.userService.delete({ id: Number(id) });
    }
}
