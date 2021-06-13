import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ToggleColorDirective } from './directives/toggle-color.directive';



@NgModule({
  declarations: [
    HighlightDirective,
    ToggleColorDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HighlightDirective,
    ToggleColorDirective
  ]
})
export class SharedModule { }
