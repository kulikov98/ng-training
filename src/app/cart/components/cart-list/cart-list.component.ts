import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ICartProduct } from '../../models/interfaces';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  products$: Observable<ICartProduct[]> = this.cartService.getProducts();
  sortOptions = {
    name: 'product.name',
    price: 'product.price',
    quantity: 'quantity'
  };
  sortBy = this.sortOptions.name;
  isAsc = true;

  constructor(private cartService: CartService) { }

  onRemove(id: string): void {
    this.cartService.removeProduct(id);
  }

  onIncrease(id: string): void {
    this.cartService.increaseQuantity(id);
  }

  onDecrease(id: string): void {
    this.cartService.decreaseQuantity(id);
  }

  trackByItems(index: number, item: ICartProduct): string {
    return item.id;
  }

  onSortValueChange(event: Event): void {
    this.sortBy = (event.target as HTMLSelectElement).value;
  }

  get summ(): number {
    return this.cartService.totalSum;
  }

  get quantity(): number {
    return this.cartService.totalQuantity;
  }
}
