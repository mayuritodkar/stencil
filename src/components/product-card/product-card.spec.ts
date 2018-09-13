import { flush, render } from '@stencil/core/testing';
import { ProductCard } from './product-card';

describe('product-card', () => {
  it('should build', () => {
    expect(new ProductCard()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLProductCardElement;
    beforeEach(async () => {
      element = await render({
        components: [ProductCard],
        html: '<product-card></product-card>'
      });
    });

    it('should not render any content if there is not a match', async () => {
      await flush(element);
      console.log(element.textContent);
      //expect(element.textContent).toEqual('');
    })
  });
});
