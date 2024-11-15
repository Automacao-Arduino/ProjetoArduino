import { Test, TestingModule } from '@nestjs/testing';
import { LuzController } from './luz.controller';

describe('LuzController', () => {
  let controller: LuzController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LuzController],
    }).compile();

    controller = module.get<LuzController>(LuzController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
