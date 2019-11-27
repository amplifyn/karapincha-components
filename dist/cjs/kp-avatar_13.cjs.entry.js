'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-9bd031f9.js');

const KpAvatar = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.isDefault = false;
        this.isSmall = false;
        this.isMedium = false;
        this.isLarge = false;
        this.classNames = {
            'kp-avatar': true,
            'is-medium': this.isMedium,
            'is-large': this.isLarge
        };
        this.defaultAvatar = () => {
            return core.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 72 82" }, core.h("defs", null), core.h("path", { fill: "#000", "fill-rule": "nonzero", d: "M20 44c2-1 3-1 4 1a16 16 0 0023 1l1-1c1-1 2-2 4-1 11 4 19 16 19 28v6c0 2-1 3-3 3H4c-2 0-3-1-3-3v-6c0-12 8-24 19-28zM36 1a20 20 0 110 40 20 20 0 010-40z" }));
        };
    }
    render() {
        if (this.isDefault) {
            return (core.h(core.Host, { class: this.classNames }, this.defaultAvatar()));
        }
        else if (this.img !== null && this.img !== undefined && this.img !== '') {
            return (core.h(core.Host, { class: this.classNames }, core.h("img", { src: this.img, alt: this.alt })));
        }
        else {
            return (core.h(core.Host, { class: this.classNames }, core.h("slot", null)));
        }
    }
    static get style() { return "kp-avatar{--avatar-size:1.5rem;--avatar-font-size:0.5625rem;--avatar-bg-color:#f2f3f4;--avatar-default-color:#cacbd1;--avatar-border-color:#f2f3f4;--avatar-border-size:1px;position:relative;z-index:0;display:-ms-inline-flexbox;display:inline-flex;width:var(--avatar-size);height:var(--avatar-size);overflow:hidden;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-size:var(--avatar-font-size);line-height:16px;letter-spacing:-.04px;text-align:center;background-color:var(--avatar-bg-color);border:var(--avatar-border-size) solid var(--avatar-border-color);border-radius:50%;cursor:pointer}kp-avatar.is-medium{--avatar-size:1.75rem;--avatar-font-size:0.625rem}kp-avatar.is-large{--avatar-size:2.25rem;--avatar-font-size:0.8125rem}kp-avatar svg{position:absolute;bottom:0;left:50%;width:calc(var(--avatar-size) - 30%);-webkit-transform:translateX(-50%);transform:translateX(-50%)}kp-avatar svg path{fill:var(--avatar-default-color)}kp-avatar img{width:var(--avatar-size);height:var(--avatar-size);-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}"; }
};

const KpAvatarGroup = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, null, core.h("slot", null)));
    }
    static get style() { return "kp-avatar-group{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}kp-avatar-group kp-avatar:not(:first-of-type){margin-left:-12px}"; }
};

const KpButton = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
            return (core.h(core.Host, null, core.h("button", { class: this.classNames, id: this.buttonId }, core.h("kp-spiner", null))));
        }
        else if (this.useIcon) {
            return (core.h(core.Host, null, core.h("button", { class: this.classNames, id: this.buttonId }, core.h("span", { class: { 'kp-button__icon': true } }))));
        }
        else {
            return (core.h(core.Host, null, core.h("button", { class: this.classNames, id: this.buttonId }, this.buttonText)));
        }
    }
    get hostElement() { return core.getElement(this); }
    static get style() { return ".kp-button{--kp-btn-min-width:4.625rem;--kp-btn-padding:0.5rem 1rem;--kp-btn-margin-left:0rem;--kp-btn-margin-right:0rem;--kp-btn-margin-top:0rem;--kp-btn-margin-bottom:0rem;--kp-btn-text-align:center;--kp-btn-justify-content:center;--kp-btn-bg-color:#00b8a7;--kp-btn-color:#fff;--kp-btn-font-size:0.9375rem;--kp-btn-font-weight:600;--kp-btn-font-style:normal;--kp-btn-line-height:1.25rem;--kp-btn-letter-spacing:-0.008125rem;--kp-btn-border-radius:1.5rem;--kp-btn-border-width:0.0625rem;--kp-btn-border-style:solid;--kp-btn-border-color:#00b8a7;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:var(--kp-btn-justify-content);justify-content:var(--kp-btn-justify-content);min-width:var(--kp-btn-min-width);margin-left:var(--kp-btn-margin-left);margin-right:var(--kp-btn-margin-right);margin-top:var(--kp-btn-margin-top);margin-bottom:var(--kp-btn-margin-bottom);font-weight:var(--kp-btn-font-weight);text-align:var(--kp-btn-text-align);white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;background-color:var(--kp-btn-bg-color);color:var(--kp-btn-color);border-width:var(--kp-btn-border-width);border-style:var(--kp-btn-border-style);border-color:var(--kp-btn-border-color);padding:var(--kp-btn-padding);font-size:var(--kp-btn-font-size);line-height:var(--kp-btn-line-height);letter-spacing:var(--kp-btn-letter-spacing);border-radius:var(--kp-btn-border-radius);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.kp-button:focus{outline:none}.kp-button:hover{--kp-btn-hover-bg-color:rgba(0,184,167,0.9);--kp-btn-hover-border-color:rgba(0,184,167,0.9);--kp-btn-hover-color:#fff;background-color:var(--kp-btn-hover-bg-color);color:var(--kp-btn-hover-color);border-color:var(--kp-btn-hover-border-color)}.kp-button--disabled{--kp-btn--disabled-bg-color:#dcdddf;--kp-btn-disabled-color:#fff;--kp-btn-disabled-border-color:#dcdddf;--kp-btn-disabled-cursor:default;cursor:var(--kp-btn-disabled-cursor)}.kp-button--disabled,.kp-button--disabled:hover{background-color:var(--kp-btn--disabled-bg-color);color:var(--kp-btn-disabled-color);border-color:var(--kp-btn-disabled-border-color)}.kp-button--large{--kp-btn-large-padding:0.625rem 1rem;--kp-btn-large-font-size:1.0625rem;--kp-btn-large-line-height:1.25rem;padding:var(--kp-btn-large-padding);font-style:var(--kp-btn-large-font-size);line-height:var(--kp-btn-large-line-height)}.kp-button--outline{--kp-btn-outline-bg-color:#f8f8f8;--kp-btn-outline-color:#00b8a7;--kp-btn-outline-border-color:#00b8a7;background-color:var(--kp-btn-outline-bg-color);color:var(--kp-btn-outline-color);border-color:var(--kp-btn-outline-border-color)}.kp-button--outline:hover{--kp-btn-outline-hover-bg-color:rgba(0,184,167,0.05);--kp-btn-outline-hover-color:#00b8a7;--kp-btn-outline-hover-border-color:#00b8a7;background-color:var(--kp-btn-outline-hover-bg-color);color:var(--kp-btn-outline-hover-color);border-color:var(--kp-btn-outline-hover-border-color)}.kp-button--outline.kp-button--disabled{--kp-btn-outline-disabled-bg-color:#f8f8f8;--kp-btn-outline-disabled-color:#dcdddf;--kp-btn-outline-disabled-border-color:#dcdddf;background-color:var(--kp-btn-outline-disabled-bg-color);color:var(--kp-btn-outline-disabled-color);border-color:var(--kp-btn-outline-disabled-border-color)}.kp-button--outline .kp-spiner__element{border-color:var(--kp-btn-outline-color) transparent transparent transparent}.kp-button--invert{--kp-btn-invert-bg-color:#fff;--kp-btn-invert-color:#00b8a7;--kp-btn-invert-border-color:#fff;background-color:var(--kp-btn-invert-bg-color);color:var(--kp-btn-invert-color);border-color:var(--kp-btn-invert-border-color)}.kp-button--invert:hover{--kp-btn-invert-hover-bg-color:hsla(0,0%,100%,0.9);--kp-btn-invert-hover-color:#00b8a7;--kp-btn-invert-hover-border-color:#fff;background-color:var(--kp-btn-invert-hover-bg-color);color:var(--kp-btn-invert-hover-color);border-color:var(--kp-btn-invert-hover-border-color)}.kp-button--invert.kp-button--disabled{--kp-btn-invert-disabled-bg-color:#dcdddf;--kp-btn-invert-disabled-color:#fff;--kp-btn-invert-disabled-border-color:#dcdddf;background-color:var(--kp-btn-invert-disabled-bg-color);color:var(--kp-btn-invert-disabled-color);border-color:var(--kp-btn-invert-disabled-border-color)}.kp-button--invert .kp-spiner__element{border-color:var(--kp-btn-invert-color) transparent transparent transparent}.kp-button--text{--kp-btn-text-bg-color:transparent;--kp-btn-text-color:#00b8a7;--kp-btn-text-border-color:transparent}.kp-button--text,.kp-button--text:hover{color:var(--kp-btn-text-color)}.kp-button--text,.kp-button--text.kp-button--disabled,.kp-button--text:hover{background-color:var(--kp-btn-text-bg-color);border-color:var(--kp-btn-text-border-color)}.kp-button--text.kp-button--disabled{--kp-btn-text-disabled-color:#dcdddf;color:var(--kp-btn-text-disabled-color)}.kp-button--text .kp-spiner__element{border-color:var(--kp-btn-text-color) transparent transparent transparent}.kp-button--outline-invert{--kp-btn-outline-invert-bg-color:transparent;--kp-btn-outline-invert-color:#fff;--kp-btn-outline-invert-border-color:#fff;background-color:var(--kp-btn-outline-invert-bg-color);color:var(--kp-btn-outline-invert-color);border-color:var(--kp-btn-outline-invert-border-color)}.kp-button--outline-invert:hover{--kp-btn-outline-invert-hover-bg-color:#fff;--kp-btn-outline-invert-hover-color:#00b8a7;--kp-btn-outline-invert-hover-border-color:#fff;background-color:var(--kp-btn-outline-invert-hover-bg-color);color:var(--kp-btn-outline-invert-hover-color);border-color:var(--kp-btn-outline-invert-hover-border-color)}.kp-button--outline-invert.kp-button--disabled{--kp-btn-outline-invert-disabled-bg-color:#f8f8f8;--kp-btn-outline-invert-disabled-color:#dcdddf;--kp-btn-outline-invert-disabled-border-color:#dcdddf;background-color:var(--kp-btn-outline-invert-disabled-bg-color);color:var(--kp-btn-outline-invert-disabled-color);border-color:var(--kp-btn-outline-invert-disabled-border-color)}.kp-button--outline-invert .kp-spiner__element{border-color:var(--kp-btn-outline-invert-color) transparent transparent transparent}.kp-button--loading{cursor:auto;pointer-events:none}.kp-button--use-icon{--kp-btn-use-icon-min-width:3rem;min-width:var(--kp-btn-use-icon-min-width)}.kp-button--use-icon-loading{--kp-btn-icon-loading-bg-color:transparent;--kp-btn-icon-loading-color:#00b8a7;--kp-btn-icon-loading-border-color:#00b8a7;background-color:var(--kp-btn-icon-loading-bg-color);border-color:var(--kp-btn-icon-loading-border-color)}.kp-button--use-icon-loading .kp-spiner__element{border-color:var(--kp-btn-icon-loading-color) transparent transparent transparent}.kp-button__icon{--kp-btn-icon-width:1.25rem;--kp-btn-icon-height:1.25rem;--kp-btn-icon-bg-color:#eee;--kp-btn-icon-color:#eee;width:var(--kp-btn-icon-width);height:var(--kp-btn-icon-height);background-color:var(--kp-btn-icon-bg-color);color:var(--kp-btn-icon-color)}"; }
};

const KpColorChip = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, { class: { 'kp-color-chip': true } }, core.h("span", { class: { 'kp-color-chip__preview': true }, style: { 'background-color': this.color } }), core.h("span", { class: { 'kp-color-chip__value': true } }, this.color)));
    }
    static get style() { return ".kp-color-chip{--kp-color-chip-border-radius:0.1875rem;--kp-color-chip-bg-color:#fff;--kp-color-chip-padding:0.5rem;--kp-color-chip-size:1.5rem;--kp-color-chip-preview-border-radius:0.1875rem;--kp-color-chip-value-padding:0.5rem;display:-ms-flexbox;display:flex;padding:var(--kp-color-chip-padding);-ms-flex-align:center;align-items:center;background-color:var(--kp-color-chip-bg-color);border-radius:var(--kp-color-chip-border-radius)}.kp-color-chip__preview{width:var(--kp-color-chip-size);height:var(--kp-color-chip-size);border-radius:var(--kp-color-chip-preview-border-radius)}.kp-color-chip__value{padding-left:var(--kp-color-chip-value-padding)}"; }
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

const KpDataRibbon = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.classNames = { 'kp-data-ribbon': true };
        this.renderAvatar = () => {
            if (this.dataAvatarUrl !== '' && this.dataAvatarUrl !== undefined && this.dataAvatarUrl !== null) {
                return [core.h("kp-avatar", { class: "kp-data-ribbon__avatar", img: this.dataAvatarUrl, "is-medium": "true" })];
            }
            return false;
        };
        this.renderHeading = () => {
            if (this.dataHeading) {
                return [
                    core.h("p", { class: { 'kp-data-ribbon__meta-heading': true } }, this.dataHeading)
                ];
            }
            return false;
        };
        this.renderMetaData = () => {
            if (this.hasLabelsSlot) {
                return [
                    core.h("span", { class: { 'kp-data-ribbon__meta-labels': true } }, core.h("slot", { name: 'labels' }))
                ];
            }
            return false;
        };
        this.renderMeta = () => {
            if (this.dataHeading || this.hasLabelsSlot) {
                return [
                    core.h("div", { class: { 'kp-data-ribbon__meta': true } }, this.renderHeading(), this.renderMetaData())
                ];
            }
            return false;
        };
        this.renderActionsSlot = () => {
            if (this.hasActionsSlot) {
                return [core.h("div", { class: { 'kp-data-ribbon__actions': true } }, core.h("slot", { name: 'actions' }))];
            }
            return false;
        };
        this.renderAfterActionsSlot = () => {
            if (this.hasAfterActionsSlot) {
                return [core.h("div", { class: { 'kp-data-ribbon__after-actions': true } }, core.h("slot", { name: 'after-actions' }))];
            }
            return false;
        };
        this.renderSlots = () => {
            if (this.hasActionsSlot || this.hasAfterActionsSlot) {
                return [
                    core.h("div", { class: "kp-data-ribbon__slots" }, this.renderActionsSlot(), this.renderAfterActionsSlot())
                ];
            }
            return false;
        };
    }
    componentWillLoad() {
        this.hasLabelsSlot = !!this.hostElement.querySelector('[slot="labels"]');
        this.hasActionsSlot = !!this.hostElement.querySelector('[slot="actions"]');
        this.hasAfterActionsSlot = !!this.hostElement.querySelector('[slot="after-actions"]');
    }
    render() {
        return (core.h(core.Host, { class: this.classNames }, this.renderAvatar(), this.renderMeta(), this.renderSlots()));
    }
    get hostElement() { return core.getElement(this); }
    static get style() { return ".kp-data-ribbon{--data-ribbon-border-radius:0.1875rem;--data-ribbon-bg-color:#fff;--data-ribbon-padding:0.5rem 1rem;--data-ribbon-actions-slot-padding:0;--data-ribbon-after-actions-slot-padding:0 0 0 0.75rem;display:-ms-flexbox;display:flex;padding:var(--data-ribbon-padding);-ms-flex-align:center;align-items:center;background-color:var(--data-ribbon-bg-color);border-radius:var(--data-ribbon-border-radius)}.kp-data-ribbon__avatar{margin-right:.5rem}.kp-data-ribbon__meta-labels label:not(:last-of-type):after{margin-right:.25rem;margin-left:.25rem;content:\"•\"}.kp-data-ribbon__slots{display:-ms-flexbox;display:flex;margin-left:auto;-ms-flex-align:center;align-items:center}.kp-data-ribbon__actions{padding:var(--data-ribbon-actions-slot-padding)}.kp-data-ribbon__after-actions{padding:var(--data-ribbon-after-actions-slot-padding)}"; }
};

const KpFab = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
            return (core.h(core.Host, { class: { 'kp-fab': true } }, core.h("button", { class: this.buttonClassNames }, core.h("kp-spiner", null))));
        }
        else {
            return (core.h(core.Host, { class: { 'kp-fab': true } }, core.h("button", { class: this.buttonClassNames }, core.h("icon", { class: this.iconClassGenerate(this.removeWhiteSpacesClass(this.dataIconName)) }))));
        }
    }
    static get style() { return ".kp-fab__btn{--kp-fab-position:relative;--kp-fab-top:0.5rem;--kp-fab-bottom:0.5rem;--kp-fab-left:0.5rem;--kp-fab-right:0.5rem;--kp-fab-padding:0rem;--kp-fab-width:2.25rem;--kp-fab-height:2.25rem;--kp-fab-border-width:0rem;--kp-fab-border-radius:50%;--kp-fab-background-color:#000;--kp-fab-text-color:#fff;--kp-fab-box-shadow:1px 1px 5px rgba(0,0,0,0.36);display:-ms-inline-flexbox;display:inline-flex;position:var(--kp-fab-position);top:var(--kp-fab-top);bottom:var(--kp-fab-bottom);left:var(--kp-fab-left);right:var(--kp-fab-right);-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--kp-fab-width);height:var(--kp-fab-height);padding:var(--kp-fab-padding);border:var(--kp-fab-border);border-radius:var(--kp-fab-border-radius);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;background-color:var(--kp-fab-background-color);color:var(--kp-fab-text-color);-webkit-box-shadow:var(--kp-fab-box-shadow);box-shadow:var(--kp-fab-box-shadow)}.kp-fab__btn:hover .kp-fab__icon{--kp-fab-icon-background-color:#00b8a7;--kp-fab-icon-color:#00b8a7;background-color:var(--kp-fab-icon-background-color);color:var(--kp-fab-icon-color)}.kp-fab__btn--disabled{--kp-fab-icon-disabled-background-color:#dcdddf;background-color:var(--kp-fab-icon-disabled-background-color)}.kp-fab__btn--disabled:hover .kp-fab__icon{--kp-fab-icon-background-color:#fff;--kp-fab-icon-color:#fff;background-color:var(--kp-fab-icon-background-color);color:var(--kp-fab-icon-color)}.kp-fab__btn--loading{cursor:auto;pointer-events:none}.kp-fab__icon{--kp-fab-icon-width:1.25rem;--kp-fab-icon-height:1.25rem;--kp-fab-icon-background-color:#fff;--kp-fab-icon-color:#fff;--kp-fab-icon-border-radius:50%;--kp-fab-icon-font-size:1.25rem;--kp-fab-icon-line-height:1.25rem;display:block;position:absolute;width:var(--kp-fab-icon-width);height:var(--kp-fab-icon-height);border-radius:var(--kp-fab-icon-border-radius);background-color:var(--kp-fab-icon-background-color);color:var(--kp-fab-icon-color)}.kp-fab--loading{pointer-events:none}"; }
};

const KpInputField = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.placeholderText = 'This is default placeholder';
        // State props
        this.isError = false;
    }
    render() {
        return (core.h(core.Host, null, core.h("input", { type: this.fieldType, placeholder: this.placeholderText, name: this.fieldName, id: this.fieldId, class: { 'kp-input-field': true, 'isError': this.isError } })));
    }
    static get style() { return ".kp-input-field{--kp-input-padding:0.5rem 0.75rem;--kp-input-border-top-left-radius:0.5rem;--kp-input-border-top-right-radius:0.5rem;--kp-input-border-bottom-left-radius:0.5rem;--kp-input-border-bottom-right-radius:0.5rem;--kp-input-color:#16171a;--kp-input-bg-color:#fff;--kp-input-placeholder-color:#727274;--kp-input-font-size:1rem;--kp-input-line-height:1.5rem;--kp-input-font-weight:500;--kp-input-font-style:normal;--kp-input-letter-spacing:0rem;--kp-input-border-style:solid;--kp-input-border-width:0.0625rem;--kp-input-border-color:#dcdddf;--kp-input-focus-border-color:#00b8a7;width:100%;padding:var(--kp-input-padding);font-size:var(--kp-input-font-size);font-style:var(--kp-input-font-style);line-height:var(--kp-input-line-height);color:var(--kp-input-color);background-color:var(--kp-input-bg-color);border-width:var(--kp-input-border-width);border-style:var(--kp-input-border-style);border-color:var(--kp-input-border-color);border-top-left-radius:var(--kp-input-border-top-left-radius);border-top-right-radius:var(--kp-input-border-top-right-radius);border-bottom-left-radius:var(--kp-input-border-bottom-left-radius);border-bottom-right-radius:var(--kp-input-border-bottom-right-radius)}.kp-input-field::-webkit-input-placeholder{color:var(--kp-input-placeholder-color)}.kp-input-field:-moz-placeholder,.kp-input-field::-moz-placeholder{color:var(--kp-input-placeholder-color)}.kp-input-field:-ms-input-placeholder{color:var(--kp-input-placeholder-color)}.kp-input-field:focus{outline:none;border:1px solid var(--kp-input-focus-border-color)}.kp-input-field.isError{--kp-input-border-color:#fc464a;border:1px solid var(--kp-input-border-color)}.kp-input-field.isError:focus{border:1px solid var(--kp-input-focus-border-color)}"; }
};

const KpInputGroup = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, { class: { 'kp-input-group': true } }, core.h("slot", null)));
    }
    static get style() { return ":host{display:block}"; }
};

const KpLabel = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        // State props
        this.isError = false;
    }
    render() {
        return (core.h(core.Host, { class: { 'kp-label': true, 'isError': this.isError } }, core.h("label", { htmlFor: this.labelFor, class: { 'kp-label__text': true } }, this.labelText)));
    }
    static get style() { return ".kp-label__text{--kp-input-label-color:#161616;--kp-input-label-font-size:0.8125rem;--kp-input-label-font-weight:500;--kp-input-label-font-style:normal;--kp-input-label-line-height:1rem;--kp-input-label-letter-spacing:0rem;display:-ms-flexbox;display:flex;margin-bottom:.625rem;font-size:var(--kp-input-label-font-size);font-weight:var(--kp-input-label-font-weight);font-style:var(--kp-input-label-font-style);line-height:var(--kp-input-label-line-height);letter-spacing:var(--kp-input-label-letter-spacing);color:var(--kp-input-label-color)}.isError .kp-label__text{--kp-label-error-color:#fc464a;color:var(--kp-label-error-color)}"; }
};

const KpLogo = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.imageAlt = 'Default Alt Text';
        // States props
        this.isDefault = false;
        this.isSmall = false;
        this.isLarge = false;
        // Class names
        this.classNames = {
            'kp-logo': true,
            'kp-logo--small': this.isSmall,
            'kp-logo--large': this.isLarge
        };
        // Preview default image
        this.prevDefaultImg = () => {
            return core.h("svg", { version: "1.0", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1687 1687" }, core.h("path", { d: "M0 843.5V1687h1687V0H0v843.5zm1091.6-472.4c52.4 5.1 101.8 27.6 139.2 63.3 7.7 7.4 9.9 9 12.1 8.7 6.6-.8 35.2-8.5 50.7-13.5 28.8-9.4 57.2-21.7 81.8-35.5 7-3.9 13-7 13.3-6.8.2.3-1.2 4.9-3.2 10.2-17.1 45.7-47.7 84.8-87.4 112.1-7.2 5-8.9 6.5-6.6 6 1.7-.3 5-.8 7.5-1.1 31.5-4.3 69.9-14.8 103.9-28.2 9-3.5 16.5-6.2 16.8-5.9.6.6-9.9 15.5-20.4 29.1-23 29.7-56.7 62.8-86.5 85.2l-8.8 6.6v28.1c0 30.7-.9 47.7-4.1 75.1-12.9 113.6-56.9 227.4-124.2 321.8-21.3 29.8-40.1 52-67.2 79.6-40.5 41.2-77.6 70.5-126 99.7-65.6 39.4-142.8 67.8-220.2 80.8-105.7 17.8-210.1 12.6-307.3-15.4-48.2-13.9-96-33.8-139-57.8-17.6-9.8-36.2-21.3-35.6-21.9.3-.3 6 .1 12.8.8 18.3 2 71 1.8 90.8-.4 85.4-9.5 161.6-38.9 230-88.6l10.5-7.6-12.2-1.1c-32.1-3.1-57.9-10.2-84.9-23.4-47.4-23.3-85.1-61.5-107.9-109.5-6.5-13.6-12.2-28.2-11.3-29.1.3-.3 5.7.3 11.9 1.3 23.2 3.5 60.2 2 82.9-3.6 6.8-1.6 7.2-1.9 4.5-2.5-30-7.6-54.3-18.2-77.5-33.7-57.6-38.6-94.5-98.8-102.5-167.7-1.3-11.4-2.1-30.2-1.1-30.2.1 0 5.4 2.4 11.7 5.4 27.7 13.1 54.5 20.3 85.7 23l6.3.6-10.3-7.7c-13.1-9.9-34.2-30.9-43.9-43.8-30.7-40.9-46.2-85-47.6-135.1-.9-30.4 2.4-54.3 11.4-81.6 4.6-14 18.6-44.2 20.2-43.6.5.1 5.2 5.2 10.3 11.3 29.3 34.3 60.3 64 96.8 92.6 98.1 77 218.5 125.3 342 137.3 31.7 3.1 32.3 3.1 31.6.9-.4-1.1-1.3-5.6-2-10-5.4-30.7-4.3-66 2.9-96.3 7.8-32.3 24.6-66.3 45.8-92.5 7.8-9.7 25.6-27.4 35.2-35.1 23.9-19.1 54.8-34.9 84-42.9 27.5-7.5 57.4-10.1 85.1-7.4z" }));
        };
    }
    render() {
        if (this.isDefault) {
            return (core.h(core.Host, { class: this.classNames }, this.prevDefaultImg()));
        }
        else if (this.imageSrc != null && this.imageSrc != undefined && this.imageSrc != '') {
            return (core.h(core.Host, null, core.h("img", { src: this.imageSrc, alt: this.imageAlt, class: this.classNames })));
        }
        else {
            return (core.h(core.Host, { class: this.classNames }, core.h("slot", null)));
        }
    }
    get hostElement() { return core.getElement(this); }
    static get style() { return ".kp-logo{--kp-logo-width:6.25rem;--kp-logo-height:auto}.kp-logo svg{width:var(--kp-logo-width);height:var(--kp-logo-height)}.kp-logo--small{--kp-logo-small-width:1.5rem}.kp-logo--small,.kp-logo--small svg{width:var(--kp-logo-small-width)}.kp-logo--large{--kp-logo-large-width:2.8125rem}.kp-logo--large,.kp-logo--large svg{width:var(--kp-logo-large-width)}"; }
};

const KpSpiner = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, null, core.h("div", { class: { 'kp-spiner': true } }, core.h("div", { class: { 'kp-spiner__element': true } }), core.h("div", { class: { 'kp-spiner__element': true } }), core.h("div", { class: { 'kp-spiner__element': true } }), core.h("div", { class: { 'kp-spiner__element': true } }))));
    }
    static get style() { return ".kp-spiner{position:relative;--kp-spiner-width:1.25rem;--kp-spiner-height:1.25rem;width:var(--kp-spiner-width);height:var(--kp-spiner-height)}.kp-spiner__element{--kp-spiner-element-width:1.25rem;--kp-spiner-element-height:1.25rem;--kp-spiner-element-border-width:0.125rem;--kp-spiner-element-border-color:1.25rem;--kp-spiner-element-border-color:#fff;--kp-spiner-element-separate-border-color:#fff transparent transparent transparent;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;width:var(--kp-spiner-element-width);height:var(--kp-spiner-element-height);border:var(--kp-spiner-element-border-width) solid var(--kp-spiner-element-border-color);border-radius:50%;-webkit-animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:var(--kp-spiner-element-separate-border-color)}.kp-spiner__element:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.kp-spiner__element:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.kp-spiner__element:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}\@-webkit-keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}"; }
};

const PlaceholderColorRibbon = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, { class: { 'placeholder-color-ribbon': true } }, core.h("span", { class: { 'placeholder-color-ribbon__chip': true } }), core.h("span", { class: { 'placeholder-color-ribbon__name': true } }, core.h("i", null)), core.h("span", { class: { 'placeholder-color-ribbon__hex-value': true } }, core.h("i", null))));
    }
    static get style() { return ".placeholder-color-ribbon{--placeholder-color-ribbon-columns:2.125rem 1fr 9.375rem;--placeholder-color-ribbon-padding:0.5rem 1rem;--placeholder-color-ribbon-bg-color:#fff;--placeholder-color-ribbon-border-radius:0.1875rem;--placeholder-color-ribbon-label-font-size:0.75rem;--placeholder-color-ribbon-label-bg-color:#f3f4f6;display:-ms-flexbox;display:flex;padding:var(--placeholder-color-ribbon-padding);-ms-flex-align:center;align-items:center;background-color:var(--placeholder-color-ribbon-bg-color);border-radius:var(--placeholder-color-ribbon-border-radius)}.placeholder-color-ribbon span{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;min-height:1.625rem}.placeholder-color-ribbon span:before{min-width:3.25rem;margin-right:.75rem}.placeholder-color-ribbon span:before,.placeholder-color-ribbon span i{min-height:1.125rem;display:-ms-inline-flexbox;display:inline-flex;padding:.3125rem .5rem;font-size:var(--placeholder-color-ribbon-label-font-size);font-weight:var(--font-weight--bold);text-transform:uppercase;background-color:var(--placeholder-color-ribbon-label-bg-color);border-radius:.1875rem}.placeholder-color-ribbon__chip{width:2rem;height:2rem;background-color:var(--placeholder-color-ribbon-label-bg-color);border-radius:var(--border-radius,.1875rem)}.placeholder-color-ribbon__name{padding-right:1rem;padding-left:1rem;text-transform:capitalize}.placeholder-color-ribbon__name:before{content:\"\"}.placeholder-color-ribbon__name i{min-width:12.5rem}.placeholder-color-ribbon__hex-value{padding-left:1rem;margin-left:auto}.placeholder-color-ribbon__hex-value:before{content:\"\"}.placeholder-color-ribbon__hex-value i{min-width:5rem}"; }
};

exports.kp_avatar = KpAvatar;
exports.kp_avatar_group = KpAvatarGroup;
exports.kp_button = KpButton;
exports.kp_color_chip = KpColorChip;
exports.kp_color_ribbon = KpColorRibbon;
exports.kp_data_ribbon = KpDataRibbon;
exports.kp_fab = KpFab;
exports.kp_input_field = KpInputField;
exports.kp_input_group = KpInputGroup;
exports.kp_label = KpLabel;
exports.kp_logo = KpLogo;
exports.kp_spiner = KpSpiner;
exports.placeholder_color_ribbon = PlaceholderColorRibbon;
