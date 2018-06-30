import { ConvectorModel } from '@worldsibu/convector-core-model';
export declare class Product extends ConvectorModel<Product> {
    readonly type: string;
    name: string;
    pictureUrl: string;
    description: string;
    price: number;
    seller: string;
    buyer: string;
}
