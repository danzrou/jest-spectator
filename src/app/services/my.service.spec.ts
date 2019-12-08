import { fakeAsync, tick } from '@angular/core/testing';
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
    depService.getName.mockReturnValue('DepService');
    expect(spectator.service.getDepName()).toEqual('DepService');
  });

  it('observable should be called once', fakeAsync(() => {
    const spy = jest.fn();
    spectator.service.getAsyncValue().subscribe(spy);
    expect(spy).toHaveBeenCalledTimes(1);
    tick(301);
    expect(spy).toHaveBeenCalledTimes(2);
  }));

  it('should call setName with NewName', () => {
    const spy = spyOn(spectator.service, 'setName');
    spectator.service.callNameAfterSubscribed().subscribe();
    expect(spy).toHaveBeenCalledWith('NewName');
  });
});
