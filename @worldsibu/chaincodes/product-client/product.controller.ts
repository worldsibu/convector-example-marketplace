import * as yup from 'yup';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core-controller';

import { Product } from '../product/src/product.model';
import { ControllerAdapter } from '@worldsibu/convector-core-adapter';


export class ProductControllerClient extends ConvectorController {
  private name = 'product';

  constructor(private adapter: ControllerAdapter) {
    super()
  }

  
  public async init(
    
    product: Product
  ) {
    await this.adapter.invoke(this.name, 'init', product);
  }

  
  public async transfer(
    
    productId: string,
    
    amount: number
  ) {
    await this.adapter.invoke(this.name, 'transfer', productId, amount);
  }
}