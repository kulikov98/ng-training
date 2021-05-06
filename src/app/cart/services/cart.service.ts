import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductModel } from 'src/app/products/models/product.model';
import { ICartProduct } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products$ = new BehaviorSubject<ICartProduct[]>([]);
  private _products: ICartProduct[] = [];

  getProducts(): Observable<ICartProduct[]> {
    return this.products$.asObservable();
  }

  addProduct(product: ProductModel): void {
    try {
      this.increaseProduct(product.id);
    } catch {
      this.addNewProduct(product);
    }
  }

  removeProduct(id: string): void {
    const updatedProducts = this._products.filter(cartProduct => cartProduct.id !== id);
    this.setProducts(updatedProducts);
  }

  increaseProduct(id: string): void {
    const product = this.getProductByIdOrFail(id);
    const newQuantity = product.quantity += 1;
    this.updateProductQuantity(id, newQuantity);
  }

  decreaseProduct(id: string): void {
    const product = this.getProductByIdOrFail(id);
    const newQuantity = product.quantity -= 1;

    if (newQuantity <= 0) {
      this.removeProduct(id);
    } else {
      this.updateProductQuantity(id, newQuantity);
    }
  }

  getSumm(): number {
    return this._products.reduce((total, cartProduct) => {
      const { product: { price }, quantity } = cartProduct;
      const summPerProduct = price * quantity;
      return total += summPerProduct;
    }, 0);
  }

  getQuantity(): number {
    return this._products.reduce((total, cartProduct) => total += cartProduct.quantity, 0);
  }

  private addNewProduct(product: ProductModel) {
    const newProduct: ICartProduct = { id: product.id, quantity: 1, product };
    const updatedProducts = [...this._products, newProduct];
    this.setProducts(updatedProducts);
  }

  private getProductByIdOrFail(id: string): ICartProduct {
    const product = this._products.find(cartProduct => cartProduct.id === id);
    if (product === undefined) {
      throw new Error(`Cannot find a product with id ${id} in the cart!`);
    }
    return product;
  }

  private updateProductQuantity(id: string, newQuantity: number): void {
    const updatedProducts = this._products.reduce<ICartProduct[]>((acc, item) => {
      if (item.id === id) {
        const updatedProduct = { ...item, quantity: newQuantity };
        return [...acc, updatedProduct];
      }
      return [...acc, item];
    }, []);

    this.setProducts(updatedProducts);
  }

  private setProducts(products: ICartProduct[]) {
    this._products = products;
    this.products$.next(products);
  }
}
