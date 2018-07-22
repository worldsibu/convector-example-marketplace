// tslint:disable:no-unused-expression

import { join } from 'path';
import { expect } from 'chai';
import * as uuid from 'uuid/v4';
import { MockControllerAdapter } from '@worldsibu/convector-adapter-mock';
import 'mocha';

import { Product } from '../src/product.model';
import { ProductControllerClient } from '../client';

describe('Product', () => {
  let productId: string;
  let adapter: MockControllerAdapter;
  let productCtrl: ProductControllerClient;

  // Mock certificate fingerprint
  const certificate = 'B6:0B:37:7C:DF:D2:7A:08:0B:98:BF:52:A4:2C:DC:4E:CC:70:91:E1';

  before(async () => {
    productId = uuid();
    // Mocks the blockchain execution environment
    adapter = new MockControllerAdapter();
    productCtrl = new ProductControllerClient(adapter);

    await adapter.init([
      {
        version: '*',
        controller: 'ProductController',
        name: join(__dirname, '..')
      }
    ]);
  });

  it('should initialize the product', async () => {
    await productCtrl.init(new Product({
      id: productId,
      name: 'Bananas',
      pictureUrl: 'https://cdn1.medicalnewstoday.com/content/images/headlines/271/271157/bananas.jpg',
      description: 'A simple product',
      price: 100
    }));

    const product = await adapter.getById<Product>(productId);

    expect(product.seller).to.exist;
  });

  it('should buy the product', async () => {
    await productCtrl.transfer(productId, 100);

    const product = await adapter.getById<Product>(productId);

    expect(product.buyer).to.eq(certificate);
  });


});
