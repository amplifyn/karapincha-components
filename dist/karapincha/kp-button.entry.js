import { r as registerInstance, h, H as Host, c as getElement } from './core-2513ca9d.js';

const KpButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // Button state props
        this.isDefault = false;
        this.isLarge = false;
        this.isOutline = false;
        this.isDisabled = false;
        this.isInvert = false;
        this.isText = false;
        this.isOutlineInvert = false;
        this.isLoading = false;
        this.useIcon = false;
        this.isLoadingIcon = false;
        // Class names
        this.classNames = {
            'kp-button': true,
            'kp-button--large': this.isLarge,
            'kp-button--outline': this.isOutline,
            'kp-button--disabled': this.isDisabled,
            'kp-button--invert': this.isInvert,
            'kp-button--text': this.isText,
            'kp-button--outline-invert': this.isOutlineInvert,
            'kp-button--loading': this.isLoading,
            'kp-button--use-icon': this.useIcon,
            'kp-button--use-icon-loading': this.isLoadingIcon
        };
    }
    render() {
        if (this.isLoading) {
            return (h(Host, null, h("button", { class: this.classNames, id: this.buttonId }, h("kp-spiner", null))));
        }
        else if (this.useIcon) {
            return (h(Host, null, h("button", { class: this.classNames, id: this.buttonId }, h("span", { class: { 'kp-button__icon': true } }))));
        }
        else {
            return (h(Host, null, h("button", { class: this.classNames, id: this.buttonId }, this.buttonText)));
        }
    }
    get hostElement() { return getElement(this); }
    static get style() { return ".kp-button{--kp-btn-min-width: 4.625rem;--kp-btn-padding: 0.5rem 1rem;--kp-btn-margin-left: 0rem;--kp-btn-margin-right: 0rem;--kp-btn-margin-top: 0rem;--kp-btn-margin-bottom: 0rem;--kp-btn-text-align: center;--kp-btn-justify-content: center;--kp-btn-bg-color: #00B8A7;--kp-btn-color: #FFFFFF;--kp-btn-font-size: 0.9375rem;--kp-btn-font-weight: 600;--kp-btn-font-style: normal;--kp-btn-line-height: 1.25rem;--kp-btn-letter-spacing: -0.008125rem;--kp-btn-border-radius: 1.5rem;--kp-btn-border-width: 0.0625rem;--kp-btn-border-style: solid;--kp-btn-border-color: #00B8A7;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:var(--kp-btn-justify-content);justify-content:var(--kp-btn-justify-content);min-width:var(--kp-btn-min-width);margin-left:var(--kp-btn-margin-left);margin-right:var(--kp-btn-margin-right);margin-top:var(--kp-btn-margin-top);margin-bottom:var(--kp-btn-margin-bottom);font-weight:var(--kp-btn-font-weight);text-align:var(--kp-btn-text-align);white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;background-color:var(--kp-btn-bg-color);color:var(--kp-btn-color);border-width:var(--kp-btn-border-width);border-style:var(--kp-btn-border-style);border-color:var(--kp-btn-border-color);padding:var(--kp-btn-padding);font-size:var(--kp-btn-font-size);line-height:var(--kp-btn-line-height);letter-spacing:var(--kp-btn-letter-spacing);border-radius:var(--kp-btn-border-radius);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.kp-button:focus{outline:none}.kp-button:hover{--kp-btn-hover-bg-color: rgb(0,184,167,0.9);--kp-btn-hover-border-color: rgb(0,184,167,0.9);--kp-btn-hover-color: #FFFFFF;background-color:var(--kp-btn-hover-bg-color);color:var(--kp-btn-hover-color);border-color:var(--kp-btn-hover-border-color)}.kp-button--disabled{--kp-btn--disabled-bg-color: #DCDDDF;--kp-btn-disabled-color: #FFFFFF;--kp-btn-disabled-border-color: #DCDDDF;--kp-btn-disabled-cursor: default;background-color:var(--kp-btn--disabled-bg-color);color:var(--kp-btn-disabled-color);border-color:var(--kp-btn-disabled-border-color);cursor:var(--kp-btn-disabled-cursor)}.kp-button--disabled:hover{background-color:var(--kp-btn--disabled-bg-color);color:var(--kp-btn-disabled-color);border-color:var(--kp-btn-disabled-border-color)}.kp-button--large{--kp-btn-large-padding: 0.625rem 1rem;--kp-btn-large-font-size: 1.0625rem;--kp-btn-large-line-height: 1.25rem;padding:var(--kp-btn-large-padding);font-style:var(--kp-btn-large-font-size);line-height:var(--kp-btn-large-line-height)}.kp-button--outline{--kp-btn-outline-bg-color: #F8F8F8;--kp-btn-outline-color: #00B8A7;--kp-btn-outline-border-color: #00B8A7;background-color:var(--kp-btn-outline-bg-color);color:var(--kp-btn-outline-color);border-color:var(--kp-btn-outline-border-color)}.kp-button--outline:hover{--kp-btn-outline-hover-bg-color: rgba(0, 184, 167, 0.05);--kp-btn-outline-hover-color: #00B8A7;--kp-btn-outline-hover-border-color: #00B8A7;background-color:var(--kp-btn-outline-hover-bg-color);color:var(--kp-btn-outline-hover-color);border-color:var(--kp-btn-outline-hover-border-color)}.kp-button--outline.kp-button--disabled{--kp-btn-outline-disabled-bg-color: #F8F8F8;--kp-btn-outline-disabled-color: #DCDDDF;--kp-btn-outline-disabled-border-color: #DCDDDF;background-color:var(--kp-btn-outline-disabled-bg-color);color:var(--kp-btn-outline-disabled-color);border-color:var(--kp-btn-outline-disabled-border-color)}.kp-button--outline .kp-spiner__element{border-color:var(--kp-btn-outline-color) transparent transparent transparent}.kp-button--invert{--kp-btn-invert-bg-color: #FFFFFF;--kp-btn-invert-color: #00B8A7;--kp-btn-invert-border-color: #FFFFFF;background-color:var(--kp-btn-invert-bg-color);color:var(--kp-btn-invert-color);border-color:var(--kp-btn-invert-border-color)}.kp-button--invert:hover{--kp-btn-invert-hover-bg-color: rgba(255, 255, 255, 0.9);--kp-btn-invert-hover-color: #00B8A7;--kp-btn-invert-hover-border-color: #FFFFFF;background-color:var(--kp-btn-invert-hover-bg-color);color:var(--kp-btn-invert-hover-color);border-color:var(--kp-btn-invert-hover-border-color)}.kp-button--invert.kp-button--disabled{--kp-btn-invert-disabled-bg-color: #DCDDDF;--kp-btn-invert-disabled-color: #FFFFFF;--kp-btn-invert-disabled-border-color: #DCDDDF;background-color:var(--kp-btn-invert-disabled-bg-color);color:var(--kp-btn-invert-disabled-color);border-color:var(--kp-btn-invert-disabled-border-color)}.kp-button--invert .kp-spiner__element{border-color:var(--kp-btn-invert-color) transparent transparent transparent}.kp-button--text{--kp-btn-text-bg-color: transparent;--kp-btn-text-color: #00B8A7;--kp-btn-text-border-color: transparent;background-color:var(--kp-btn-text-bg-color);color:var(--kp-btn-text-color);border-color:var(--kp-btn-text-border-color)}.kp-button--text:hover{background-color:var(--kp-btn-text-bg-color);color:var(--kp-btn-text-color);border-color:var(--kp-btn-text-border-color)}.kp-button--text.kp-button--disabled{--kp-btn-text-disabled-color: #DCDDDF;background-color:var(--kp-btn-text-bg-color);color:var(--kp-btn-text-disabled-color);border-color:var(--kp-btn-text-border-color)}.kp-button--text .kp-spiner__element{border-color:var(--kp-btn-text-color) transparent transparent transparent}.kp-button--outline-invert{--kp-btn-outline-invert-bg-color: transparent;--kp-btn-outline-invert-color: #FFFFFF;--kp-btn-outline-invert-border-color: #FFFFFF;background-color:var(--kp-btn-outline-invert-bg-color);color:var(--kp-btn-outline-invert-color);border-color:var(--kp-btn-outline-invert-border-color)}.kp-button--outline-invert:hover{--kp-btn-outline-invert-hover-bg-color: #FFFFFF;--kp-btn-outline-invert-hover-color: #00B8A7;--kp-btn-outline-invert-hover-border-color: #FFFFFF;background-color:var(--kp-btn-outline-invert-hover-bg-color);color:var(--kp-btn-outline-invert-hover-color);border-color:var(--kp-btn-outline-invert-hover-border-color)}.kp-button--outline-invert.kp-button--disabled{--kp-btn-outline-invert-disabled-bg-color: #F8F8F8;--kp-btn-outline-invert-disabled-color: #DCDDDF;--kp-btn-outline-invert-disabled-border-color: #DCDDDF;background-color:var(--kp-btn-outline-invert-disabled-bg-color);color:var(--kp-btn-outline-invert-disabled-color);border-color:var(--kp-btn-outline-invert-disabled-border-color)}.kp-button--outline-invert .kp-spiner__element{border-color:var(--kp-btn-outline-invert-color) transparent transparent transparent}.kp-button--loading{cursor:auto;pointer-events:none}.kp-button--use-icon{--kp-btn-use-icon-min-width: 3rem;min-width:var(--kp-btn-use-icon-min-width)}.kp-button--use-icon-loading{--kp-btn-icon-loading-bg-color: transparent;--kp-btn-icon-loading-color: #00B8A7;--kp-btn-icon-loading-border-color: #00B8A7;background-color:var(--kp-btn-icon-loading-bg-color);border-color:var(--kp-btn-icon-loading-border-color)}.kp-button--use-icon-loading .kp-spiner__element{border-color:var(--kp-btn-icon-loading-color) transparent transparent transparent}.kp-button__icon{--kp-btn-icon-width: 1.25rem;--kp-btn-icon-height: 1.25rem;--kp-btn-icon-bg-color: #eee;--kp-btn-icon-color: #eee;width:var(--kp-btn-icon-width);height:var(--kp-btn-icon-height);background-color:var(--kp-btn-icon-bg-color);color:var(--kp-btn-icon-color)}"; }
};

export { KpButton as kp_button };
