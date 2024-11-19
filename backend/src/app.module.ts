import { Module } from '@nestjs/common';
import { DeviceModule } from './device/device.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [ DeviceModule, ReportModule ],
})
export class AppModule {}
