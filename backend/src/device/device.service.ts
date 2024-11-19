import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DeviceService {
  private prisma = new PrismaClient();

  async toggleDevice(device: string, state: string): Promise<void> {
    await this.prisma.deviceState.create({
      data: {
        device,
        state,
      },
    });
  }

}

