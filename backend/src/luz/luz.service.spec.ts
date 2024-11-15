import { Test, TestingModule } from '@nestjs/testing';
import { LuzService } from './luz.service';

describe('LuzService', () => {
  let service: LuzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LuzService],
    }).compile();

    service = module.get<LuzService>(LuzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
