import { MeanStackRouterModule } from './mean-stack-router.module';

describe('MeanStackRouterModule', () => {
  let meanStackRouterModule: MeanStackRouterModule;

  beforeEach(() => {
    meanStackRouterModule = new MeanStackRouterModule();
  });

  it('should create an instance', () => {
    expect(meanStackRouterModule).toBeTruthy();
  });
});
