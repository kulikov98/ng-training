import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggleColor]'
})
export class ToggleColorDirective {
  @Input('appToggleColor') color = '';
  private defaultColor = '#fff';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('click') private onClick(): void {
    console.log(this.color ?? this.defaultColor);

    const hasColorStyle = !!this.elementRef.nativeElement.style.color;
    if (hasColorStyle) {
      this.renderer.removeStyle(this.elementRef.nativeElement, 'color');
      return;
    }
    const color = this.color === '' ? this.defaultColor : this.color;
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
  }
}
