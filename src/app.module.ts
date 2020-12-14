import { Module } from '@nestjs/common';
import { PSpendingModule } from './modules/pspending/pspending.module';

@Module({
  imports: [
      PSpendingModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
