import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: ProductModel[] = [];

  constructor() { }

  getProducts(): ProductModel[] {
    return this.products;
  }

  addProduct(product: ProductModel): void {
    this.products.push(product);
  }

  // Я бы не полагался на индекс в массиве,
  // может быть лучше принимать мдентификатор товара или сам товар.
  removeProduct(index: number): void {
    this.products.splice(index, 1);
  }
}
