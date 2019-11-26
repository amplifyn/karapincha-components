import { newE2EPage } from '@stencil/core/testing';

describe('kp-input-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kp-input-field></kp-input-field>');

    const element = await page.find('kp-input-field');
    expect(element).toHaveClass('hydrated');
  });
});
