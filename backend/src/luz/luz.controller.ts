import { Controller, Post, Body } from '@nestjs/common';
import { LuzService } from './luz.service';

@Controller('luz')
export class LuzController {
  constructor(private readonly luzService: LuzService) {}

  @Post('toggle')
  async toggleLuz(@Body() body: { state: string }): Promise<string> {
    const { state } = body;
    await this.luzService.toggleLuz(state);
    return `Luz agora está ${state}`;
  }
}
