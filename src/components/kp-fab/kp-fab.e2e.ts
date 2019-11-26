import { newE2EPage } from '@stencil/core/testing';

describe('kp-fab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kp-fab></kp-fab>');

    const element = await page.find('kp-fab');
    expect(element).toHaveClass('hydrated');
  });
});
