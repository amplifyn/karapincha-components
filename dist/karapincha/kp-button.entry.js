import { r as registerInstance, h, H as Host } from './core-2513ca9d.js';

const KpButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // Button state props
        this.isDefault = false;
        this.isLarge = false;
        this.isDisabled = false;
        this.isLoading = false;
        // Class names
        this.classNames = {
            'kp-button': true,
            'kp-button--large': this.isLarge,
            'kp-button--disabled': this.isDisabled,
            'kp-button--loading': this.isLoading
        };
    }
    render() {
        if (this.isLoading) {
            return (h(Host, null, h("button", { class: this.classNames, id: this.btnId }, h("kp-spiner", null))));
        }
        else {
            return (h(Host, null, h("button", { class: this.classNames, id: this.btnId }, this.text)));
        }
    }
    static get style() { return ".kp-button{--kp-btn-padding-left: 0rem;--kp-btn-padding-rigth: 0rem;--kp-btn-padding-top: 0rem;--kp-btn-padding-bottom: 0rem;--kp-btn-justify-content: center;--kp-btn-align-items: center;--kp-btn-bg-color: #00B8A7;--kp-btn-color: #FFFFFF;--kp-btn-font-size: initial;--kp-btn-font-weight: initial;--kp-btn-border-radius: initial;--kp-btn-border-color: #00B8A7;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:var(--kp-btn-justify-content);justify-content:var(--kp-btn-justify-content);-ms-flex-align:var(--kp-btn-align-items);align-items:var(--kp-btn-align-items);font-weight:var(--kp-btn-font-weight);white-space:nowrap;cursor:pointer;background-color:var(--kp-btn-bg-color);color:var(--kp-btn-color);padding-left:var(--kp-btn-padding-left);padding-right:var(--kp-btn-padding-right);padding-top:var(--kp-btn-padding-top);padding-bottom:var(--kp-btn-padding-bottom);font-size:var(--kp-btn-font-size, initial);border:1px solid var(--kp-btn-border-color);border-radius:var(--kp-btn-border-radius, initial)}.kp-button:focus,.kp-button:hover{--kp-btn-bg-color: rgb(0,184,167,0.9);--kp-btn-border-color: rgb(0,184,167,0.9);--kp-btn-color: #FFFFFF;outline:none}.kp-button--disabled{--kp-btn-bg-color: #DCDDDF;--kp-btn-color: #FFFFFF;--kp-btn-border-color: #DCDDDF;cursor:default;pointer-events:none}.kp-button--disabled:focus,.kp-button--disabled:hover{--kp-btn-bg-color: #DCDDDF;--kp-btn-color: #FFFFFF;--kp-btn-border-color: #DCDDDF}.kp-button--large{--kp-btn-font-size: initial;--kp-btn-padding-left: 0rem;--kp-btn-padding-rigth: 0rem;--kp-btn-padding-top: 0rem;--kp-btn-padding-bottom: 0rem}.kp-button--loading{cursor:auto;pointer-events:none}"; }
};

export { KpButton as kp_button };
