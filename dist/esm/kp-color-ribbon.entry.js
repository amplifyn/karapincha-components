import { r as registerInstance, h, H as Host } from './core-805626da.js';

const KpColorRibbon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isCard = false;
        this.colorName = 'Sample Color ⚠️';
        this.colorRgb = 'rgb(243, 244, 246)';
        this.colorWeight = 'SC500';
        this.colorHex = '#f3f4f6';
    }
    render() {
        return (h(Host, { class: { 'kp-color-ribbon': true, 'isCard': this.isCard } }, h("span", { class: { 'kp-color-ribbon__chip': true }, style: { 'background-color': this.colorHex.toUpperCase() } }), h("span", { class: { 'kp-color-ribbon__name': true } }, this.colorWeight, " - ", this.colorName), h("span", { class: { 'kp-color-ribbon__hex-value': true } }, this.colorHex.toUpperCase()), h("span", { class: { 'kp-color-ribbon__rgb-value': true } }, this.colorRgb)));
    }
    static get style() { return ".kp-color-ribbon{--kp-color-ribbon-columns:2.125rem 1fr 1fr 1fr;--kp-color-ribbon-row-gap:0rem;--kp-color-ribbon-padding:0.5rem;--kp-color-ribbon-bg-color:#fff;--kp-color-ribbon-border-radius:0.1875rem;--kp-color-ribbon-box-shadow:0 0.625rem 2.5rem -0.625rem rgba(0,64,128,0.12);--kp-color-ribbon-label-font-size:0.75rem;--kp-color-ribbon-label-bg-color:#f3f4f6;display:grid;padding:var(--kp-color-ribbon-padding);-ms-flex-align:center;align-items:center;grid-template-columns:var(--kp-color-ribbon-columns);background-color:var(--kp-color-ribbon-bg-color);-webkit-box-shadow:var(--kp-color-ribbon-box-shadow);box-shadow:var(--kp-color-ribbon-box-shadow);border-radius:var(--kp-color-ribbon-border-radius);row-gap:var(--kp-color-ribbon-row-gap)}.kp-color-ribbon.isCard{--kp-color-ribbon-columns:1fr;--kp-color-ribbon-row-gap:0.5rem;--kp-color-ribbon-padding:1rem 1rem 1.5rem;--kp-color-ribbon-border-radius:0.1875rem;--kp-color-ribbon-box-shadow:0 0.625rem 2.5rem -0.625rem rgba(0,64,128,0.12);--kp-color-ribbon-label-font-size:0.75rem}.kp-color-ribbon span:before{display:-ms-inline-flexbox;display:inline-flex;padding:.3125rem .5rem;margin-right:.75rem;font-size:var(--kp-color-ribbon-label-font-size);font-weight:var(--font-weight--bold);text-transform:uppercase;background-color:var(--kp-color-ribbon-label-bg-color);border-radius:.1875rem}.kp-color-ribbon.isCard span:before{width:3.75rem;-ms-flex-pack:center;justify-content:center}.kp-color-ribbon__chip{width:2rem;height:2rem;background-color:var(--kp-color-ribbon-label-bg-color);border-radius:var(--border-radius,.1875rem)}.isCard .kp-color-ribbon__chip{width:100%;height:4.125rem;margin-bottom:.5rem}.kp-color-ribbon__name{padding-right:1rem;padding-left:.5rem;text-transform:capitalize}.kp-color-ribbon__name:before{content:\"Name\"}.isCard .kp-color-ribbon__name{padding:0}.kp-color-ribbon__hex-value{padding-right:1rem;padding-left:.5rem}.kp-color-ribbon__hex-value:before{content:\"Hex\"}.isCard .kp-color-ribbon__hex-value{padding:0}.kp-color-ribbon__rgb-value{padding-right:1rem;padding-left:.5rem}.kp-color-ribbon__rgb-value:before{content:\"RGB\"}.isCard .kp-color-ribbon__rgb-value{padding:0}"; }
};

export { KpColorRibbon as kp_color_ribbon };
