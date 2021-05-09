import { Category } from '../enums/category.enum';

export class ProductModel {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public imageUrl: string,
        public price: number,
        public isAvailable: boolean,
        public category: Category,
    ) { }
}
