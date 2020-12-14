import { Injectable } from '@nestjs/common';
import { PSpending } from '@prisma/client';

import { PrismaService } from '../../prisma.service';

@Injectable()
export class PSpendingService {
    constructor(
        private prisma: PrismaService
    ) { }

    public async findAll(): Promise<PSpending[]> {
        return this.prisma.pSpending.findMany({});
    }
}
