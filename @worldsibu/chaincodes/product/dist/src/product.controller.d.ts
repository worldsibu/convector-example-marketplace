import { ConvectorController } from '@worldsibu/convector-core-controller';
import { Product } from './product.model';
export declare class ProductController extends ConvectorController {
    private initialized;
    init(product: Product): Promise<void>;
    transfer(productId: string, amount: number): Promise<void>;
}
