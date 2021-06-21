import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Category } from '../enums/category.enum';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private data: ProductModel[] = [
    {
      id: '1',
      name: 'Смартфон Apple iPhone 12 256GB (фиолетовый)',
      description: 'A14 Bionic, самый быстрый процессор iPhone. Дисплей OLED от края до края. И Ночной режим на всех камерах.',
      imageUrl: 'https://cdn.svyaznoy.ru/upload/iblock/1f5/ruru_iphone12_q321_purple_pdp-image-1b.jpg/resize/483x483/hq/',
      price: 107485,
      isAvailable: true,
      category: Category.Iphone12
    },
    {
      id: '2',
      name: 'Смартфон Apple iPhone 11 128GB с новой комплектацией (черный)',
      description: 'Новая система двух камер не оставит никого из ваших друзей за кадром. Самый быстрый процессор iPhone и мощный аккумулятор позволят больше делать и тратить меньше времени на подзарядку. А высочайшее качество видео на iPhone означает, что ваши истории станут еще ярче и детальнее.',
      imageUrl: 'https://cdn.svyaznoy.ru/upload/iblock/989/iphone_11_b_2.jpg/resize/483x483/hq/',
      price: 57190,
      isAvailable: true,
      category: Category.Iphone11
    },
    {
      id: '3',
      name: 'Смартфон Apple iPhone XS 256GB (серый космос)',
      description: 'Дисплей Super Retina в двух размерах, один из которых стал самым большим в истории iPhone. Еще более быстрый Face ID. Самый мощный и умный процессор iPhone. И потрясающая двойная камера. В iPhone XS воплощено все, что вы любите в iPhone. На новом уровне.',
      imageUrl: 'https://cdn.svyaznoy.ru/upload/iblock/5e8/00855dd604381def3eb81d2aca28a4cd.jpg/resize/483x483/hq/',
      price: 58495,
      isAvailable: false,
      category: Category.IphoneXS
    },
    {
      id: '4',
      name: 'Смартфон Apple iPhone XR 64GB с новой комплектацией (черный)',
      description: 'Новый дисплей Liquid Retina - самый продвинутый ЖК‑дисплей Apple. Еще более быстрый Face ID. Самый мощный и умный процессор iPhone. И потрясающая камера. iPhone XR - воплощение красоты и интеллекта.',
      imageUrl: 'https://cdn.svyaznoy.ru/upload/iblock/6d6c2e04e02af79323dc273c81811bbf/11.jpg/resize/483x483/hq/',
      price: 49087,
      isAvailable: true,
      category: Category.IphoneXR
    },
  ];

  constructor() { }

  getProducts(): Observable<ProductModel[]> {
    return of(this.data);
  }
}
