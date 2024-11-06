import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeviceController } from './device/device.controller';
import { DeviceService } from './device/device.service';
import { DeviceModule } from './device/device.module';


@Module({
  imports: [DeviceModule],
  controllers: [AppController, DeviceController],
  providers: [AppService, DeviceService],
})
export class AppModule {}
