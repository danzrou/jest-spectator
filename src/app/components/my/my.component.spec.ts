import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';

import { MyComponent } from './my.component';

describe('MyComponent', () => {
  let spectator: SpectatorHost<MyComponent>;
  const createHost = createHostFactory(MyComponent);

  it('should display title provided by host', () => {
    const title = 'Host Title';
    spectator = createHost(`<app-my [title]="title"></app-my>`, {
      hostProps: {
        title
      }
    });

    expect(spectator.query('.title')).toHaveText(title);
  });
});
