import data from 'data/product-list.json';
import { IProduct } from './../types/IProduct';

export const getDummyProducts = (): IProduct[] => {
    let products: IProduct[] = [];
    data.map((data: IProduct) => products.push(data));
    return products;
};
