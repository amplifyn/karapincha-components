import { r as registerInstance, h, H as Host } from './core-8710fcfc.js';

const KpColorChip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: { 'kp-color-chip': true } }, h("span", { class: { 'kp-color-chip__preview': true }, style: { 'background-color': this.color } }), h("span", { class: { 'kp-color-chip__value': true } }, this.color)));
    }
    static get style() { return ".kp-color-chip{--kp-color-chip-border-radius: 0.1875rem;--kp-color-chip-bg-color: #ffffff;--kp-color-chip-padding: 0.5rem;--kp-color-chip-size: 1.5rem;--kp-color-chip-preview-border-radius: 0.1875rem;--kp-color-chip-value-padding: 0.5rem;display:-ms-flexbox;display:flex;padding:var(--kp-color-chip-padding);-ms-flex-align:center;align-items:center;background-color:var(--kp-color-chip-bg-color);border-radius:var(--kp-color-chip-border-radius)}.kp-color-chip__preview{width:var(--kp-color-chip-size);height:var(--kp-color-chip-size);border-radius:var(--kp-color-chip-preview-border-radius)}.kp-color-chip__value{padding-left:var(--kp-color-chip-value-padding)}"; }
};

export { KpColorChip as kp_color_chip };
