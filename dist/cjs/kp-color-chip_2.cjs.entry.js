'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-49111143.js');

const KpColorChip = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, { class: { 'kp-color-chip': true } }, core.h("span", { class: { 'kp-color-chip__preview': true }, style: { 'background-color': this.color } }), core.h("span", { class: { 'kp-color-chip__value': true } }, this.color)));
    }
    static get style() { return ".kp-color-chip{--kp-color-chip-border-radius:0.1875rem;--kp-color-chip-bg-color:#fff;--kp-color-chip-padding:1rem;--kp-color-chip-size:1.5rem;--kp-color-chip-preview-border-radius:0.1875rem;--kp-color-chip-value-padding:1rem;display:-ms-flexbox;display:flex;padding:var(--kp-color-chip-padding);-ms-flex-align:center;align-items:center;background-color:var(--kp-color-chip-bg-color);border-radius:var(--kp-color-chip-border-radius)}.kp-color-chip__preview{width:var(--kp-color-chip-size);height:var(--kp-color-chip-size);border-radius:var(--kp-color-chip-preview-border-radius)}.kp-color-chip__value{padding-left:var(--kp-color-chip-value-padding)}"; }
};

const KpColorRibbon = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.isCard = false;
        this.colorName = 'Sample Color ⚠️';
        this.colorRgb = 'rgb(243, 244, 246)';
        this.colorWeight = 'SC500';
        this.colorHex = '#f3f4f6';
    }
    render() {
        return (core.h(core.Host, { class: { 'kp-color-ribbon': true, 'isCard': this.isCard } }, core.h("span", { class: { 'kp-color-ribbon__chip': true }, style: { 'background-color': this.colorHex.toUpperCase() } }), core.h("span", { class: { 'kp-color-ribbon__name': true } }, this.colorWeight, " - ", this.colorName), core.h("span", { class: { 'kp-color-ribbon__hex-value': true } }, this.colorHex.toUpperCase()), this.isCard ? core.h("span", { class: { 'kp-color-ribbon__rgb-value': true } }, this.colorRgb) : false));
    }
    static get style() { return ".kp-color-ribbon{--kp-color-ribbon-columns:2.125rem 1fr 9.375rem;--kp-color-ribbon-padding:0.5rem 1rem;--kp-color-ribbon-bg-color:#fff;--kp-color-ribbon-border-radius:0.1875rem;--kp-color-ribbon-label-font-size:0.75rem;--kp-color-ribbon-label-bg-color:#f3f4f6;display:-ms-flexbox;display:flex;padding:var(--kp-color-ribbon-padding);-ms-flex-align:center;align-items:center;background-color:var(--kp-color-ribbon-bg-color);border-radius:var(--kp-color-ribbon-border-radius)}.kp-color-ribbon.isCard{--kp-color-ribbon-columns:1fr;--kp-color-ribbon-padding:1rem 1rem 1.5rem;--kp-color-ribbon-border-radius:0.1875rem;--kp-color-ribbon-label-font-size:0.75rem}.kp-color-ribbon span{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.kp-color-ribbon span:before{display:-ms-inline-flexbox;display:inline-flex;padding:.3125rem .5rem;margin-right:.75rem;font-size:var(--kp-color-ribbon-label-font-size);font-weight:var(--font-weight--bold);text-transform:uppercase;background-color:var(--kp-color-ribbon-label-bg-color);border-radius:.1875rem}.kp-color-ribbon.isCard{display:grid;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;row-gap:.5rem}.kp-color-ribbon.isCard span:before{width:3.75rem;-ms-flex-pack:center;justify-content:center}.kp-color-ribbon__chip{width:2rem;height:2rem;background-color:var(--kp-color-ribbon-label-bg-color);border-radius:var(--border-radius,.1875rem)}.isCard .kp-color-ribbon__chip{width:100%;height:4.125rem;margin-bottom:.5rem}.kp-color-ribbon__name{padding-right:1rem;padding-left:1rem;text-transform:capitalize}.kp-color-ribbon__name:before{content:\"Name\"}.isCard .kp-color-ribbon__name{padding:0}.kp-color-ribbon__hex-value{padding-left:1rem;margin-left:auto}.kp-color-ribbon__hex-value:before{content:\"Hex\"}.isCard .kp-color-ribbon__hex-value{padding:0;margin-left:unset}.kp-color-ribbon__rgb-value{padding-left:1rem;margin-left:auto}.kp-color-ribbon__rgb-value:before{content:\"RGB\"}.isCard .kp-color-ribbon__rgb-value{padding:0;margin-left:unset}"; }
};

exports.kp_color_chip = KpColorChip;
exports.kp_color_ribbon = KpColorRibbon;
