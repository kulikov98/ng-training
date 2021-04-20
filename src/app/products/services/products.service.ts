import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Category } from '../enums/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private data: ProductModel[] = [
    { id: '1', name: 'some name 1', description: 'some description 1', price: 1, category: Category['Accessories & Supplies'] },
    { id: '2', name: 'some name 2', description: 'some description 2', price: 2, category: Category['Camera & Photo'] },
    { id: '3', name: 'some name 3', description: 'some description 3', price: 3, category: Category['Car & Vehicle Electronics'] },
    { id: '4', name: 'some name 4', description: 'some description 4', price: 4, category: Category['Cell Phones & Accessories'] },
  ];

  constructor() { }

  getProducts(): ProductModel[] {
    return this.data;
  }
}
