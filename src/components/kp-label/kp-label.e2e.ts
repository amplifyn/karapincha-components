import { newE2EPage } from '@stencil/core/testing';

describe('kp-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kp-label></kp-label>');

    const element = await page.find('kp-label');
    expect(element).toHaveClass('hydrated');
  });
});
