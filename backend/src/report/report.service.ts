import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ReportService {
  private prisma = new PrismaClient();

  async getDeviceStates(): Promise<any[]> {
    return await this.prisma.deviceState.findMany({
      orderBy: {
        createdAt: 'desc', 
      },
    });
  }
}
