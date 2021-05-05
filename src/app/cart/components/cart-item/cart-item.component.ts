import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() product: ProductModel | undefined;
  @Output() increase = new EventEmitter<number>();
}
