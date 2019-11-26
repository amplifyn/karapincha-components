import { r as registerInstance, h, H as Host } from './core-2513ca9d.js';

const KpLabel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // State props
        this.isError = false;
    }
    render() {
        return (h(Host, { class: { 'kp-label': true, 'isError': this.isError } }, h("label", { htmlFor: this.labelFor, class: { 'kp-label__text': true } }, this.labelText)));
    }
    static get style() { return ".kp-label__text{--kp-input-label-color: #161616;--kp-input-label-font-size: 0.8125rem;--kp-input-label-font-weight: 500;--kp-input-label-font-style: normal;--kp-input-label-line-height: 1rem;--kp-input-label-letter-spacing: 0rem;display:-ms-flexbox;display:flex;margin-bottom:0.625rem;font-size:var(--kp-input-label-font-size);font-weight:var(--kp-input-label-font-weight);font-style:var(--kp-input-label-font-style);line-height:var(--kp-input-label-line-height);letter-spacing:var(--kp-input-label-letter-spacing);color:var(--kp-input-label-color)}.isError .kp-label__text{--kp-label-error-color: #FC464A;color:var(--kp-label-error-color)}"; }
};

export { KpLabel as kp_label };
