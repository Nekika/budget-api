import { Module } from '@nestjs/common';

import { PSpendingModule } from './modules/pspending/pspending.module';
import { SpendingModule } from './modules/spending/spending.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
      PSpendingModule,
      SpendingModule,
      UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
