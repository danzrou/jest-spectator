import { createServiceFactory, mockProvider, SpectatorService } from '@ngneat/spectator/jest';
import { DepService, MyService } from './my.service';

describe('MyService', () => {
  let spectator: SpectatorService<MyService>;
  const createService = createServiceFactory<MyService>({
    service: MyService,
    providers: [mockProvider(DepService, {
      getName(): string {
        return 'DepService';
      }
    })]
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
