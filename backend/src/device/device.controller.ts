import { Controller, Post, Body, Param } from '@nestjs/common';
import { DeviceService } from './device.service';

@Controller(':device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Post('toggle')
  async toggleDevice(
    @Param('device') device: string,
    @Body() body: { state: string },
  ): Promise<string> {
    const { state } = body;
    await this.deviceService.toggleDevice(device, state);
    return `${device} agora está ${state}`;
  }
}
