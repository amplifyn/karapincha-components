import { r as registerInstance, h, H as Host } from './core-8710fcfc.js';

const PlaceholderColorRibbon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: { 'placeholder-color-ribbon': true } }, h("span", { class: { 'placeholder-color-ribbon__chip': true } }), h("span", { class: { 'placeholder-color-ribbon__name': true } }, h("i", null)), h("span", { class: { 'placeholder-color-ribbon__hex-value': true } }, h("i", null))));
    }
    static get style() { return ".placeholder-color-ribbon{--placeholder-color-ribbon-columns: 2.125rem 1fr 9.375rem;--placeholder-color-ribbon-padding: 0.5rem 1rem;--placeholder-color-ribbon-bg-color: #ffffff;--placeholder-color-ribbon-border-radius: 0.1875rem;--placeholder-color-ribbon-label-font-size: 0.75rem;--placeholder-color-ribbon-label-bg-color: #f3f4f6;display:-ms-flexbox;display:flex;padding:var(--placeholder-color-ribbon-padding);-ms-flex-align:center;align-items:center;background-color:var(--placeholder-color-ribbon-bg-color);border-radius:var(--placeholder-color-ribbon-border-radius)}.placeholder-color-ribbon span{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;min-height:1.625rem}.placeholder-color-ribbon span:before{min-height:1.125rem;min-width:3.25rem;display:-ms-inline-flexbox;display:inline-flex;padding:.3125rem .5rem;margin-right:.75rem;font-size:var(--placeholder-color-ribbon-label-font-size);font-weight:var(--font-weight--bold);text-transform:uppercase;background-color:var(--placeholder-color-ribbon-label-bg-color);border-radius:.1875rem}.placeholder-color-ribbon span i{min-height:1.125rem;display:-ms-inline-flexbox;display:inline-flex;padding:.3125rem .5rem;font-size:var(--placeholder-color-ribbon-label-font-size);font-weight:var(--font-weight--bold);text-transform:uppercase;background-color:var(--placeholder-color-ribbon-label-bg-color);border-radius:.1875rem}.placeholder-color-ribbon__chip{width:2rem;height:2rem;background-color:var(--placeholder-color-ribbon-label-bg-color);border-radius:var(--border-radius, 0.1875rem)}.placeholder-color-ribbon__name{padding-right:1rem;padding-left:1rem;text-transform:capitalize}.placeholder-color-ribbon__name:before{content:\"\"}.placeholder-color-ribbon__name i{min-width:12.5rem}.placeholder-color-ribbon__hex-value{padding-left:1rem;margin-left:auto}.placeholder-color-ribbon__hex-value:before{content:\"\"}.placeholder-color-ribbon__hex-value i{min-width:5rem}"; }
};

export { PlaceholderColorRibbon as placeholder_color_ribbon };
