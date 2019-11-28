import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class MyDirective {
  @HostBinding('style.background-color')
  backgroundColor;
  
  @HostListener('mouseover')
  onHover() {
    this.backgroundColor = '#000000';
  }
  
  @HostListener('mouseout')
  onLeave() {
    this.backgroundColor = '#ffffff';
  }
}
