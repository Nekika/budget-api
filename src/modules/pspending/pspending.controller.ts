import { Controller, Get } from '@nestjs/common';
import { PSpending } from '@prisma/client';
import { PSpendingService } from './pspending.service';

@Controller('api/pspending')
export class PSpendingController {
    constructor(
        private pSpendingService: PSpendingService
    ) { }

    @Get()
    public async getAll(): Promise<PSpending[]> {
        return await this.pSpendingService.findAll();
    }
}
