import { Module } from '@nestjs/common';

import { PSpendingModule } from './modules/pspending/pspending.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
      PSpendingModule,
      UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
