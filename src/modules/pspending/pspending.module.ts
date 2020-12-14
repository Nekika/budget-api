import { Module } from '@nestjs/common';

import { PrismaService } from '../../prisma.service';
import { PSpendingService } from './pspending.service';

import { PSpendingController } from './pspending.controller';

@Module({
  providers: [
      PrismaService,
      PSpendingService
  ],
  controllers: [
      PSpendingController
  ]
})
export class PSpendingModule {}
