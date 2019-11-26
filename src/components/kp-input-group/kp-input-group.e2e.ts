import { newE2EPage } from '@stencil/core/testing';

describe('kp-input-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kp-input-group></kp-input-group>');

    const element = await page.find('kp-input-group');
    expect(element).toHaveClass('hydrated');
  });
});
