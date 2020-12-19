import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Spending } from '@prisma/client';

import { SpendingService } from './spending.service';

import { BadRequestException } from 'src/helper/exception';
import { SpendingDto } from 'src/dto/spending.dto';

@Controller('api/spending')
export class SpendingController {
    constructor(
        private spendingService: SpendingService
    ) { }

    @Get('user/:user_id')
    public async getAllForUser(@Param('user_id') userId: string): Promise<Spending[]> {
        return await this.spendingService.findAll({ user_id: Number(userId) });
    }

    @Post()
    public async create(@Body() data: SpendingDto): Promise<Spending> {
        try {
            return await this.spendingService.create(data);
        } catch (e) {
            throw new BadRequestException(e);
        }
    }

    @Put(':id')
    public async updateForUser(@Param('id') id: number, @Body() data: SpendingDto): Promise<Spending> {
        if (Number(id) !== data.id) {
            throw new BadRequestException(`The 'id' query parameter does not match the 'id' body parameter.`);
        }
        try {
            return await this.spendingService.update({ data, where: { id: Number(id) } });
        } catch (e) {
            throw new BadRequestException(e);
        }
    }

    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<Spending> {
        try {
            return await this.spendingService.delete({ id: Number(id) });
        } catch (e) {
            throw new BadRequestException(e);
        }
    }
}
