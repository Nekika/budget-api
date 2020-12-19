import { Module } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';
import { SpendingService } from './spending.service';

import { SpendingController } from './spending.controller';

import { DateValidator, SpendingValidator } from 'src/helper/validator';


@Module({
  controllers: [
    SpendingController
  ],
  providers: [
    PrismaService,
    DateValidator,
    SpendingService,
    SpendingValidator
  ]
})
export class SpendingModule {}
