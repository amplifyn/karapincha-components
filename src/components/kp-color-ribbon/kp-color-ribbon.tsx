import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'kp-color-ribbon',
  styleUrl: 'kp-color-ribbon.scss'
})
export class KpColorRibbon {
  @Prop() color = {
    "name": "Lead",
    "weight": "L500",
    "hex": "#212121",
    "rgb": { "r": 33, "g": 33, "b": 33 },
    "distance": 0,
    "luminance": 22.062320231562225,
    "requestedHex": "#212121",
  };

  @Prop() isCard: boolean = false;

  private _colorRGB = `rgb(${this.color.rgb.r}, ${this.color.rgb.g}, ${this.color.rgb.b})`;

  componentDidLoad() {
    console.log(this.color);
  }

  render() {
    return (
      <Host class={{ 'kp-color-ribbon': true, 'isCard': this.isCard }}>
        <span class={{ 'kp-color-ribbon__chip': true }} style={{ 'background-color': this.color.hex }}></span>
        <span class={{ 'kp-color-ribbon__name': true }}>{this.color.weight} - {this.color.name}</span>
        <span class={{ 'kp-color-ribbon__hex-value': true }}>{this.color.hex}</span>
        <span class={{ 'kp-color-ribbon__rgb-value': true }}>{this._colorRGB}</span>
      </Host>
    );
  }
}
