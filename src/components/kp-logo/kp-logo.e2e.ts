import { newE2EPage } from '@stencil/core/testing';

describe('kp-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kp-logo></kp-logo>');

    const element = await page.find('kp-logo');
    expect(element).toHaveClass('hydrated');
  });
});
