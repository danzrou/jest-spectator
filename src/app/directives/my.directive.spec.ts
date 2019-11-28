import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator/jest';
import { MyDirective } from './my.directive';

describe('MyDirective', () => {
  let spectator: SpectatorDirective<MyDirective>;
  const createDirective = createDirectiveFactory(MyDirective);
  
  beforeEach(() => spectator = createDirective(`<div appHighlight>Test my directive</div>`));
  
  it('should get directive instance', () => {
    expect(spectator.directive).toBeDefined();
  });
  
  it('should change div background color', () => {
    spectator.dispatchMouseEvent(spectator.element, 'mouseover');
    expect(spectator.element).toHaveStyle({
      backgroundColor: '#000000'
    });
    
    spectator.dispatchMouseEvent(spectator.element, 'mouseout');
    expect(spectator.element).toHaveStyle({
      backgroundColor: '#ffffff'
    });
  });
});
