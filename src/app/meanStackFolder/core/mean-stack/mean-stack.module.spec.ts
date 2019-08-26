import { MeanStackModule } from './mean-stack.module';

describe('MeanStackModule', () => {
  let meanStackModule: MeanStackModule;

  beforeEach(() => {
    meanStackModule = new MeanStackModule();
  });

  it('should create an instance', () => {
    expect(meanStackModule).toBeTruthy();
  });
});
