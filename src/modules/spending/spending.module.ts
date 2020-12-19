import { Module } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';
import { SpendingService } from './spending.service';

import { SpendingController } from './spending.controller';

import { SpendingValidator } from 'src/helper/validator';


@Module({
  controllers: [
    SpendingController
  ],
  providers: [
    PrismaService,
    SpendingService,
    SpendingValidator
  ]
})
export class SpendingModule {}
