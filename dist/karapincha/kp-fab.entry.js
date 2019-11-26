import { r as registerInstance, h, H as Host } from './core-2513ca9d.js';

const KpFab = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isDisabled = false;
        this.isLoading = false;
        //Button class names
        this.buttonClassNames = {
            'kp-fab__btn': true,
            'kp-fab__btn--disabled': this.isDisabled,
            'kp-fab__btn--loading': this.isLoading
        };
    }
    // Get icon class names by dataIconName
    iconClassGenerate(dataIconName) {
        if (dataIconName != null && dataIconName != undefined && dataIconName != '') {
            let iconClassName = dataIconName;
            return 'kp-fab__icon kp-fab__icon--' + iconClassName;
        }
    }
    // Remove white spaces from string
    removeWhiteSpacesClass(string) {
        return string.replace(/\s/g, "");
    }
    render() {
        if (this.isLoading) {
            return (h(Host, { class: { 'kp-fab': true } }, h("button", { class: this.buttonClassNames }, h("kp-spiner", null))));
        }
        else {
            return (h(Host, { class: { 'kp-fab': true } }, h("button", { class: this.buttonClassNames }, h("icon", { class: this.iconClassGenerate(this.removeWhiteSpacesClass(this.dataIconName)) }))));
        }
    }
    static get style() { return ".kp-fab__btn{--kp-fab-position: relative;--kp-fab-top: 0.5rem;--kp-fab-bottom: 0.5rem;--kp-fab-left: 0.5rem;--kp-fab-right: 0.5rem;--kp-fab-padding: 0rem;--kp-fab-width: 2.25rem;--kp-fab-height: 2.25rem;--kp-fab-border-width: 0rem;--kp-fab-border-radius: 50%;--kp-fab-background-color: #000000;--kp-fab-text-color: #ffffff;--kp-fab-box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.36);display:-ms-inline-flexbox;display:inline-flex;position:var(--kp-fab-position);top:var(--kp-fab-top);bottom:var(--kp-fab-bottom);left:var(--kp-fab-left);right:var(--kp-fab-right);-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--kp-fab-width);height:var(--kp-fab-height);padding:var(--kp-fab-padding);border:var(--kp-fab-border);border-radius:var(--kp-fab-border-radius);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;background-color:var(--kp-fab-background-color);color:var(--kp-fab-text-color);-webkit-box-shadow:var(--kp-fab-box-shadow);box-shadow:var(--kp-fab-box-shadow)}.kp-fab__btn:hover .kp-fab__icon{--kp-fab-icon-background-color: #00B8A7;--kp-fab-icon-color: #00B8A7;background-color:var(--kp-fab-icon-background-color);color:var(--kp-fab-icon-color)}.kp-fab__btn--disabled{--kp-fab-icon-disabled-background-color: #DCDDDF;background-color:var(--kp-fab-icon-disabled-background-color)}.kp-fab__btn--disabled:hover .kp-fab__icon{--kp-fab-icon-background-color: #ffffff;--kp-fab-icon-color: #ffffff;background-color:var(--kp-fab-icon-background-color);color:var(--kp-fab-icon-color)}.kp-fab__btn--loading{cursor:auto;pointer-events:none}.kp-fab__icon{--kp-fab-icon-width: 1.25rem;--kp-fab-icon-height: 1.25rem;--kp-fab-icon-background-color: #fff;--kp-fab-icon-color: #fff;--kp-fab-icon-border-radius: 50%;--kp-fab-icon-font-size: 1.25rem;--kp-fab-icon-line-height: 1.25rem;display:block;position:absolute;width:var(--kp-fab-icon-width);height:var(--kp-fab-icon-height);border-radius:var(--kp-fab-icon-border-radius);background-color:var(--kp-fab-icon-background-color);color:var(--kp-fab-icon-color)}.kp-fab--loading{pointer-events:none}"; }
};

export { KpFab as kp_fab };
