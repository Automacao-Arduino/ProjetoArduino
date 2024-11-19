import { Controller, Get } from '@nestjs/common';
import { ReportService } from './report.service';

@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get('device-states')
  async getDeviceStates() {
    return await this.reportService.getDeviceStates();
  }
}
