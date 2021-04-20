import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  products: ProductModel[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
  }

  onRemove(id: number): void {
    this.cartService.removeProduct(id);
  }

  trackByItems(index: number, item: ProductModel): string {
    return item.id;
  }

}
