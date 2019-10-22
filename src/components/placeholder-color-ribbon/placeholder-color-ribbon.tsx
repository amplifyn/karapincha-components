import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'placeholder-color-ribbon',
  styleUrl: 'placeholder-color-ribbon.scss'
})
export class PlaceholderColorRibbon {
  render() {
    return (
      <Host class={{ 'placeholder-color-ribbon': true }}>
        <span class={{ 'placeholder-color-ribbon__chip': true }}></span>
        <span class={{ 'placeholder-color-ribbon__name': true }}>
          <i></i>
        </span>
        <span class={{ 'placeholder-color-ribbon__hex-value': true }}>
          <i></i>
        </span>
      </Host>
    );
  }
}
