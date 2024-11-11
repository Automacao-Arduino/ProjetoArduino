import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { AppModule } from 'src/app.module';

@Module({
  controllers: [DeviceController], [AppModule],
  providers: [DeviceService],
})
export class DeviceModule {}
