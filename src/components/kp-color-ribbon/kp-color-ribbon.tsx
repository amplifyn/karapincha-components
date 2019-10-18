import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'kp-color-ribbon',
  styleUrl: 'kp-color-ribbon.scss'
})
export class KpColorRibbon {
  @Prop() isCard: boolean = false;
  @Prop() colorName: string = 'Sample Color ⚠️';
  @Prop() colorRgb: string = 'rgb(243, 244, 246)';
  @Prop() colorWeight: string = 'SC500';
  @Prop() colorHex: string = '#f3f4f6';

  render() {
    return (
      <Host class={{ 'kp-color-ribbon': true, 'isCard': this.isCard }}>
        <span class={{ 'kp-color-ribbon__chip': true }} style={{ 'background-color': this.colorHex.toUpperCase() }}></span>
        <span class={{ 'kp-color-ribbon__name': true }}>{this.colorWeight} - {this.colorName}</span>
        <span class={{ 'kp-color-ribbon__hex-value': true }}>{this.colorHex.toUpperCase()}</span>

        {this.isCard ? <span class={{ 'kp-color-ribbon__rgb-value': true }}>{this.colorRgb}</span> : false}
      </Host>
    );
  }
}
