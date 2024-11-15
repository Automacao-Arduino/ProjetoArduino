import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class LuzService {
  private prisma = new PrismaClient();

  async toggleLuz(state: string): Promise<void> {
    await this.prisma.luzState.create({
      data: {
        state,
      },
    });
  }
}
