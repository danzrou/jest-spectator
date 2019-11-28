import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory(AppComponent);
  
  beforeEach(() => spectator = createComponent());
  
  it('should have h1 title', () => {
    const title = spectator.component.title;
    expect(spectator.query('h1').textContent).toContain(title);
  });
  
  it('should set title in h1', () => {
    const title = 'My title';
    spectator.component.title = title;
    spectator.detectComponentChanges();
    expect(spectator.query('h1').textContent).toContain(title);
  });
  
  it('should have 3 list items', () => {
    expect(spectator.queryAll('li').length).toEqual(3);
  });
});
