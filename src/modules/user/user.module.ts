import { Module } from '@nestjs/common';

import { PrismaService } from '../../prisma.service';
import { UserService } from './user.service';

import { UserValidator } from '../../helper/validator';

import { UserController } from './user.controller';

@Module({
  providers: [
      PrismaService,
      UserService,
      UserValidator
  ],
  controllers: [
      UserController
  ]
})
export class UserModule {}
