import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { DepService, MyService } from './my.service';

describe('MyService', () => {
  let spectator: SpectatorService<MyService>;
  const createService = createServiceFactory<MyService>({
    service: MyService,
    mocks: [DepService]
  });
  
  beforeEach(() => spectator = createService());
  
  it('should be created', () => {
    expect(spectator.service).toBeDefined();
  });
  
  it('should return DepService', () => {
    const depService = spectator.get(DepService);
    expect(depService).toBeDefined();
  });
});
