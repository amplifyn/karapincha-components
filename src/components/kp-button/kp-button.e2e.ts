import { newE2EPage } from '@stencil/core/testing';

describe('kp-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kp-button></kp-button>');

    const element = await page.find('kp-button');
    expect(element).toHaveClass('hydrated');
  });
});
