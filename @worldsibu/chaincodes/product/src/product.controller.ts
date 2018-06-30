import * as yup from 'yup';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core-controller';

import { Product } from './product.model';

@Controller('product')
export class ProductController extends ConvectorController {
  private initialized = false;

  @Invokable()
  public async init(
    @Param(Product)
    product: Product
  ) {
    if (this.initialized) {
      throw new Error('Product has already been initialized');
    }

    if(product.buyer){
      throw new Error('Due to transparency, a product cannot be initialized with a buyer.');
    }
    
    product.seller = this.sender;
    await product.save();
  }

  @Invokable()
  public async transfer(
    @Param(yup.string())
    productId: string,
    @Param(yup.number().moreThan(0))
    amount: number
  ) {
    const product = await Product.getOne(productId);

    // Will be based on convector-example-token later
    if (amount < product.price) {
      throw new Error('Not enough money to buy it.');
    }

    product.buyer = this.sender;

    await product.save();
  }
}