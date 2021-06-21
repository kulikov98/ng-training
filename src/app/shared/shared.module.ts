import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ToggleColorDirective } from './directives/toggle-color.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HighlightDirective,
    ToggleColorDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    HighlightDirective,
    ToggleColorDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
