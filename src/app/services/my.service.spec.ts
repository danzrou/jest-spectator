import { fakeAsync, tick } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { DepService, MyService } from './my.service';
import createSpy = jasmine.createSpy;

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
    depService.getName.mockReturnValue('DepService');
    expect(spectator.service.getDepName()).toEqual('DepService');
  });
  
  it('observable should be called once', fakeAsync(() => {
    const spy = createSpy('asyncValue');
    spectator.service.getAsyncValue().subscribe(spy);
    expect(spy).toHaveBeenCalledTimes(1);
    tick(301);
    expect(spy).toHaveBeenCalledTimes(2);
  }));
});
