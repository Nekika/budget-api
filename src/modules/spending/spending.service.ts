import { Injectable } from '@nestjs/common';
import { Spending, Prisma } from '@prisma/client';

import { PrismaService } from '../../prisma.service';

import { SpendingDto } from 'src/dto/spending.dto';
import { SpendingValidator } from 'src/helper/validator/spending.validator';

interface SpendingUpdateParams {
    data: SpendingDto,
    where: Prisma.SpendingWhereUniqueInput
}

@Injectable()
export class SpendingService {
    constructor(
        private prisma: PrismaService,
        private validator: SpendingValidator
    ) { }

    public async findAll(where: Prisma.SpendingWhereInput): Promise<Spending[]> {
        return await this.prisma.spending.findMany({ where });
    }

    public async find(where: Prisma.SpendingWhereUniqueInput): Promise<Spending | null> {
        return await this.prisma.spending.findUnique({ where });
    }

    public async create(data: SpendingDto): Promise<Spending> {
        if(!this.validator.isValid(data)) {
            throw "Spending create data are invalid";
        }

        const User = { connect: { id: data.initiator.id } };
        const PSpending = { connect: { id: data.type.id } };

        return await this.prisma.spending.create({
            data: { ...data, User, PSpending }
        });
    }

    public async update(params: SpendingUpdateParams): Promise<Spending> {
        if(!this.validator.isValid(params.data)) {
            throw "Spending update data are invalid";
        }
        return await this.prisma.spending.update(params);
    }

    public async delete(where: Prisma.SpendingWhereUniqueInput): Promise<Spending> {
        return this.prisma.spending.delete({ where });
    }

}
