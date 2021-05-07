import { ProductModel } from 'src/app/products/models/product.model';

export interface ICartProduct {
    id: string;
    product: ProductModel;
    quantity: number;
}
