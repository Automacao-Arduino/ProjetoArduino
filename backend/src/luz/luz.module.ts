import { Module } from '@nestjs/common';
import { LuzService } from './luz.service';
import { LuzController } from './luz.controller';

@Module({
  providers: [LuzService],
  controllers: [LuzController]
})
export class LuzModule {}
