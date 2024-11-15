import { Module } from '@nestjs/common';
import { LuzModule } from './luz/luz.module';

@Module({
  imports: [LuzModule],
})
export class AppModule {}
