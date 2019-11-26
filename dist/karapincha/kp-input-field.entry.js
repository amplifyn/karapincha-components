import { r as registerInstance, h, H as Host } from './core-2513ca9d.js';

const KpInputField = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.placeholderText = 'This is default placeholder';
        // State props
        this.isError = false;
    }
    render() {
        return (h(Host, null, h("input", { type: this.fieldType, placeholder: this.placeholderText, name: this.fieldName, id: this.fieldId, class: { 'kp-input-field': true, 'isError': this.isError } })));
    }
    static get style() { return ".kp-input-field{--kp-input-padding: 0.5rem 0.75rem;--kp-input-border-top-left-radius: 0.5rem;--kp-input-border-top-right-radius: 0.5rem;--kp-input-border-bottom-left-radius: 0.5rem;--kp-input-border-bottom-right-radius: 0.5rem;--kp-input-color: #16171A;--kp-input-bg-color: #ffffff;--kp-input-placeholder-color: #727274;--kp-input-font-size: 1rem;--kp-input-line-height: 1.5rem;--kp-input-font-weight: 500;--kp-input-font-style: normal;--kp-input-letter-spacing: 0rem;--kp-input-border-style: solid;--kp-input-border-width: 0.0625rem;--kp-input-border-color: #DCDDDF;--kp-input-focus-border-color: #00B8A7;width:100%;padding:var(--kp-input-padding);font-size:var(--kp-input-font-size);font-style:var(--kp-input-font-style);line-height:var(--kp-input-line-height);color:var(--kp-input-color);background-color:var(--kp-input-bg-color);border-width:var(--kp-input-border-width);border-style:var(--kp-input-border-style);border-color:var(--kp-input-border-color);border-top-left-radius:var(--kp-input-border-top-left-radius);border-top-right-radius:var(--kp-input-border-top-right-radius);border-bottom-left-radius:var(--kp-input-border-bottom-left-radius);border-bottom-right-radius:var(--kp-input-border-bottom-right-radius)}.kp-input-field::-webkit-input-placeholder{color:var(--kp-input-placeholder-color)}.kp-input-field:-moz-placeholder{color:var(--kp-input-placeholder-color)}.kp-input-field::-moz-placeholder{color:var(--kp-input-placeholder-color)}.kp-input-field:-ms-input-placeholder{color:var(--kp-input-placeholder-color)}.kp-input-field:focus{outline:none;border:1px solid var(--kp-input-focus-border-color)}.kp-input-field.isError{--kp-input-border-color: #FC464A;border:1px solid var(--kp-input-border-color)}.kp-input-field.isError:focus{border:1px solid var(--kp-input-focus-border-color)}"; }
};

export { KpInputField as kp_input_field };
