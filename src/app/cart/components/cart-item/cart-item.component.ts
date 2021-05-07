import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartProduct } from '../../models/interfaces';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() product!: ICartProduct;
  @Output() increase = new EventEmitter<string>();
  @Output() decrease = new EventEmitter<string>();
  @Output() remove = new EventEmitter<string>();

  onRemove(): void {
    this.remove.emit(this.product.id);
  }

  onIncrease(): void {
    this.increase.emit(this.product.id);
  }

  onDecrease(): void {
    this.decrease.emit(this.product.id);
  }
}
