import { Controller, Get, Post, Body } from '@nestjs/common';
import { DeviceService } from './device.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('arduino')
@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Post('control')
  @ApiOperation({ summary: 'Enviar comando para o Arduino' })
  async controlDevice(@Body('command') command: string): Promise<{ message: string }> {
    const message = await this.deviceService.sendCommand(command);
    return { message };
  }

  @Get('status')
  @ApiOperation({ summary: 'Obter o status atual do Arduino' })
  getStatus(): { state: string } {
    const state = this.deviceService.getStatus();
    return { state };
  }
}
