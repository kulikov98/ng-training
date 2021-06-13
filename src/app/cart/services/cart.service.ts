import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductModel } from 'src/app/products/models/product.model';
import { ICartProduct } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts$ = new BehaviorSubject<ICartProduct[]>([]);
  private cartProducts: ICartProduct[] = [];

  getProducts(): Observable<ICartProduct[]> {
    return this.cartProducts$.asObservable();
  }

  addProduct(product: ProductModel): void {
    try {
      this.increaseQuantity(product.id);
    } catch {
      this.addNewProduct(product);
    }
  }

  removeProduct(id: string): void {
    const updatedProducts = this.cartProducts.filter(cartProduct => cartProduct.id !== id);
    this.setProducts(updatedProducts);
  }

  removeAllProducts(): void {
    this.setProducts([]);
  }

  increaseQuantity(id: string): void {
    const product = this.getProductByIdOrFail(id);
    const newQuantity = product.quantity += 1;
    this.changeQuantity(id, newQuantity);
  }

  decreaseQuantity(id: string): void {
    const product = this.getProductByIdOrFail(id);
    const newQuantity = product.quantity -= 1;

    if (newQuantity <= 0) {
      this.removeProduct(id);
    } else {
      this.changeQuantity(id, newQuantity);
    }
  }

  get totalSum(): number {
    return this.cartProducts.reduce((total, cartProduct) => {
      const { product: { price }, quantity } = cartProduct;
      const summPerProduct = price * quantity;
      return total += summPerProduct;
    }, 0);
  }

  get totalQuantity(): number {
    return this.cartProducts.reduce((total, cartProduct) => total += cartProduct.quantity, 0);
  }

  get isEmptyCart(): boolean {
    return this.cartProducts.length === 0;
  }

  private addNewProduct(product: ProductModel): void {
    const newProduct: ICartProduct = { id: product.id, quantity: 1, product };
    const updatedProducts = [...this.cartProducts, newProduct];
    this.setProducts(updatedProducts);
  }

  private getProductByIdOrFail(id: string): ICartProduct {
    const product = this.cartProducts.find(cartProduct => cartProduct.id === id);
    if (product === undefined) {
      throw new Error(`Cannot find a product with id ${id} in the cart!`);
    }
    return product;
  }

  private changeQuantity(id: string, newQuantity: number): void {
    const updatedProducts = this.cartProducts.reduce<ICartProduct[]>((acc, item) => {
      if (item.id === id) {
        const updatedProduct = { ...item, quantity: newQuantity };
        return [...acc, updatedProduct];
      }
      return [...acc, item];
    }, []);

    this.setProducts(updatedProducts);
  }

  private setProducts(products: ICartProduct[]): void {
    this.cartProducts = products;
    this.cartProducts$.next(products);
  }
}
