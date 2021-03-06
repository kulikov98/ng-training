import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.background')
  private color: string | null = null;

  @HostListener('mouseenter')
  onMouseOver(): void {
    this.color = 'lavender';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.color = null;
  }
}
