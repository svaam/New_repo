import { FurnitureRouterModule } from './furniture-router.module';

describe('FurnitureRouterModule', () => {
  let furnitureRouterModule: FurnitureRouterModule;

  beforeEach(() => {
    furnitureRouterModule = new FurnitureRouterModule();
  });

  it('should create an instance', () => {
    expect(furnitureRouterModule).toBeTruthy();
  });
});
