/** @module @worldsibu/convector-examples-token */

import * as yup from 'yup';
import {
  ConvectorModel,
  ReadOnly,
  Required,
  Validate
} from '@worldsibu/convector-core-model';

export class Product extends ConvectorModel<Product> {
  @ReadOnly()
  public readonly type = 'io.worldsibu.examples.marketplace.product';

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public name: string;

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public pictureUrl: string;

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public description: string;
  
  @ReadOnly()
  @Required()
  @Validate(yup.number())
  public price: number;

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public seller: string;

  @ReadOnly()
  @Validate(yup.string())
  public buyer: string;
}
