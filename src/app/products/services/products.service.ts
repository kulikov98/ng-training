import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Category } from '../enums/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private data: ProductModel[] = [
    {
      id: '1',
      name: 'Смартфон Apple iPhone 12 256GB (фиолетовый)',
      description: 'A14 Bionic, самый быстрый процессор iPhone. Дисплей OLED от края до края. И Ночной режим на всех камерах.',
      price: 107485,
      isAvailable: true,
      category: Category['Apple iPhone 12']
    },
    {
      id: '2',
      name: 'Смартфон Apple iPhone 11 128GB с новой комплектацией (черный)',
      description: 'Новая система двух камер не оставит никого из ваших друзей за кадром. Самый быстрый процессор iPhone и мощный аккумулятор позволят больше делать и тратить меньше времени на подзарядку. А высочайшее качество видео на iPhone означает, что ваши истории станут еще ярче и детальнее.',
      price: 57190,
      isAvailable: true,
      category: Category['Apple iPhone 11']
    },
    {
      id: '3',
      name: 'Смартфон Apple iPhone XS 256GB (серый космос)',
      description: 'Дисплей Super Retina в двух размерах, один из которых стал самым большим в истории iPhone. Еще более быстрый Face ID. Самый мощный и умный процессор iPhone. И потрясающая двойная камера. В iPhone XS воплощено все, что вы любите в iPhone. На новом уровне.',
      price: 58495,
      isAvailable: false,
      category: Category['Apple iPhone XS']
    },
    {
      id: '4',
      name: 'Смартфон Apple iPhone XR 64GB с новой комплектацией (черный)',
      description: 'Новый дисплей Liquid Retina - самый продвинутый ЖК‑дисплей Apple. Еще более быстрый Face ID. Самый мощный и умный процессор iPhone. И потрясающая камера. iPhone XR - воплощение красоты и интеллекта.',
      price: 49087,
      isAvailable: true,
      category: Category['Apple iPhone XR']
    },
  ];

  constructor() { }

  getProducts(): ProductModel[] {
    return this.data;
  }
}
