import { newE2EPage } from '@stencil/core/testing';

describe('kp-spiner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kp-spiner></kp-spiner>');

    const element = await page.find('kp-spiner');
    expect(element).toHaveClass('hydrated');
  });
});
