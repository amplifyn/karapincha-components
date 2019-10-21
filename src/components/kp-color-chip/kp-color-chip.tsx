import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'kp-color-chip',
  styleUrl: 'kp-color-chip.scss'
})
export class KpColorChip {
  @Prop() color: string;

  render() {
    return (
      <Host class={{ 'kp-color-chip': true }}>
        <span class={{ 'kp-color-chip__preview': true }} style={{ 'background-color': this.color }}></span>
        <span class={{ 'kp-color-chip__value': true }}>{this.color}</span>
      </Host>
    );
  }
}
