import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: ProductModel;

  // Внедрите эту зависимость в родительский компонент,
  // а тут реализуйте аутпут
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onBuy(product: ProductModel): void {
    console.log(`"${product.name}" have been added to the cart`);
    this.cartService.addProduct(product);
  }
}
