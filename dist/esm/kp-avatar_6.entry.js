import { r as registerInstance, h, H as Host, g as getElement } from './core-3137b077.js';

const KpAvatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            return h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 72 82" }, h("defs", null), h("path", { fill: "#000", "fill-rule": "nonzero", d: "M20 44c2-1 3-1 4 1a16 16 0 0023 1l1-1c1-1 2-2 4-1 11 4 19 16 19 28v6c0 2-1 3-3 3H4c-2 0-3-1-3-3v-6c0-12 8-24 19-28zM36 1a20 20 0 110 40 20 20 0 010-40z" }));
        };
    }
    render() {
        if (this.isDefault) {
            return (h(Host, { class: this.classNames }, this.defaultAvatar()));
        }
        else if (this.img !== null && this.img !== undefined && this.img !== '') {
            return (h(Host, { class: this.classNames }, h("img", { src: this.img, alt: this.alt })));
        }
        else {
            return (h(Host, { class: this.classNames }, h("slot", null)));
        }
    }
    static get style() { return "kp-avatar{--avatar-size:1.5rem;--avatar-font-size:0.5625rem;--avatar-bg-color:#f2f3f4;--avatar-default-color:#cacbd1;--avatar-border-color:#f2f3f4;--avatar-border-size:1px;position:relative;z-index:0;display:-ms-inline-flexbox;display:inline-flex;width:var(--avatar-size);height:var(--avatar-size);overflow:hidden;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-size:var(--avatar-font-size);line-height:16px;letter-spacing:-.04px;text-align:center;background-color:var(--avatar-bg-color);border:var(--avatar-border-size) solid var(--avatar-border-color);border-radius:50%;cursor:pointer}kp-avatar.is-medium{--avatar-size:1.75rem;--avatar-font-size:0.625rem}kp-avatar.is-large{--avatar-size:2.25rem;--avatar-font-size:0.8125rem}kp-avatar svg{position:absolute;bottom:0;left:50%;width:calc(var(--avatar-size) - 30%);-webkit-transform:translateX(-50%);transform:translateX(-50%)}kp-avatar svg path{fill:var(--avatar-default-color)}kp-avatar img{width:var(--avatar-size);height:var(--avatar-size);-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}"; }
};

const KpAvatarGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return "kp-avatar-group{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}kp-avatar-group kp-avatar:not(:first-of-type){margin-left:-12px}"; }
};

const KpColorChip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: { 'kp-color-chip': true } }, h("span", { class: { 'kp-color-chip__preview': true }, style: { 'background-color': this.color } }), h("span", { class: { 'kp-color-chip__value': true } }, this.color)));
    }
    static get style() { return ".kp-color-chip{--kp-color-chip-border-radius:0.1875rem;--kp-color-chip-bg-color:#fff;--kp-color-chip-padding:0.5rem;--kp-color-chip-size:1.5rem;--kp-color-chip-preview-border-radius:0.1875rem;--kp-color-chip-value-padding:0.5rem;display:-ms-flexbox;display:flex;padding:var(--kp-color-chip-padding);-ms-flex-align:center;align-items:center;background-color:var(--kp-color-chip-bg-color);border-radius:var(--kp-color-chip-border-radius)}.kp-color-chip__preview{width:var(--kp-color-chip-size);height:var(--kp-color-chip-size);border-radius:var(--kp-color-chip-preview-border-radius)}.kp-color-chip__value{padding-left:var(--kp-color-chip-value-padding)}"; }
};

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
        return (h(Host, { class: { 'kp-color-ribbon': true, 'isCard': this.isCard } }, h("span", { class: { 'kp-color-ribbon__chip': true }, style: { 'background-color': this.colorHex.toUpperCase() } }), h("span", { class: { 'kp-color-ribbon__name': true } }, this.colorWeight, " - ", this.colorName), h("span", { class: { 'kp-color-ribbon__hex-value': true } }, this.colorHex.toUpperCase()), this.isCard ? h("span", { class: { 'kp-color-ribbon__rgb-value': true } }, this.colorRgb) : false));
    }
    static get style() { return ".kp-color-ribbon{--kp-color-ribbon-columns:2.125rem 1fr 9.375rem;--kp-color-ribbon-padding:0.5rem 1rem;--kp-color-ribbon-bg-color:#fff;--kp-color-ribbon-border-radius:0.1875rem;--kp-color-ribbon-label-font-size:0.75rem;--kp-color-ribbon-label-bg-color:#f3f4f6;display:-ms-flexbox;display:flex;padding:var(--kp-color-ribbon-padding);-ms-flex-align:center;align-items:center;background-color:var(--kp-color-ribbon-bg-color);border-radius:var(--kp-color-ribbon-border-radius)}.kp-color-ribbon.isCard{--kp-color-ribbon-columns:1fr;--kp-color-ribbon-padding:1rem 1rem 1.5rem;--kp-color-ribbon-border-radius:0.1875rem;--kp-color-ribbon-label-font-size:0.75rem}.kp-color-ribbon span{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.kp-color-ribbon span:before{display:-ms-inline-flexbox;display:inline-flex;padding:.3125rem .5rem;margin-right:.75rem;font-size:var(--kp-color-ribbon-label-font-size);font-weight:var(--font-weight--bold);text-transform:uppercase;background-color:var(--kp-color-ribbon-label-bg-color);border-radius:.1875rem}.kp-color-ribbon.isCard{display:grid;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;row-gap:.5rem}.kp-color-ribbon.isCard span:before{width:3.75rem;-ms-flex-pack:center;justify-content:center}.kp-color-ribbon__chip{width:2rem;height:2rem;background-color:var(--kp-color-ribbon-label-bg-color);border-radius:var(--border-radius,.1875rem)}.isCard .kp-color-ribbon__chip{width:100%;height:4.125rem;margin-bottom:.5rem}.kp-color-ribbon__name{padding-right:1rem;padding-left:1rem;text-transform:capitalize}.kp-color-ribbon__name:before{content:\"Name\"}.isCard .kp-color-ribbon__name{padding:0}.kp-color-ribbon__hex-value{padding-left:1rem;margin-left:auto}.kp-color-ribbon__hex-value:before{content:\"Hex\"}.isCard .kp-color-ribbon__hex-value{padding:0;margin-left:unset}.kp-color-ribbon__rgb-value{padding-left:1rem;margin-left:auto}.kp-color-ribbon__rgb-value:before{content:\"RGB\"}.isCard .kp-color-ribbon__rgb-value{padding:0;margin-left:unset}"; }
};

const KpDataRibbon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.classNames = { 'kp-data-ribbon': true };
        this.renderAvatar = () => {
            if (this.dataAvatarUrl !== '' && this.dataAvatarUrl !== undefined && this.dataAvatarUrl !== null) {
                return [h("kp-avatar", { class: "kp-data-ribbon__avatar", img: this.dataAvatarUrl, "is-medium": "true" })];
            }
            return false;
        };
        this.renderHeading = () => {
            if (this.dataHeading) {
                return [
                    h("p", { class: { 'kp-data-ribbon__meta-heading': true } }, this.dataHeading)
                ];
            }
            return false;
        };
        this.renderMetaData = () => {
            if (this.hasLabelsSlot) {
                return [
                    h("span", { class: { 'kp-data-ribbon__meta-labels': true } }, h("slot", { name: 'labels' }))
                ];
            }
            return false;
        };
        this.renderMeta = () => {
            if (this.dataHeading || this.hasLabelsSlot) {
                return [
                    h("div", { class: { 'kp-data-ribbon__meta': true } }, this.renderHeading(), this.renderMetaData())
                ];
            }
            return false;
        };
        this.renderActionsSlot = () => {
            if (this.hasActionsSlot) {
                return [h("div", { class: { 'kp-data-ribbon__actions': true } }, h("slot", { name: 'actions' }))];
            }
            return false;
        };
        this.renderAfterActionsSlot = () => {
            if (this.hasAfterActionsSlot) {
                return [h("div", { class: { 'kp-data-ribbon__after-actions': true } }, h("slot", { name: 'after-actions' }))];
            }
            return false;
        };
        this.renderSlots = () => {
            if (this.hasActionsSlot || this.hasAfterActionsSlot) {
                return [
                    h("div", { class: "kp-data-ribbon__slots" }, this.renderActionsSlot(), this.renderAfterActionsSlot())
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
        return (h(Host, { class: this.classNames }, this.renderAvatar(), this.renderMeta(), this.renderSlots()));
    }
    get hostElement() { return getElement(this); }
    static get style() { return ".kp-data-ribbon{--data-ribbon-border-radius:0.1875rem;--data-ribbon-bg-color:#fff;--data-ribbon-padding:0.5rem 1rem;--data-ribbon-actions-slot-padding:0;--data-ribbon-after-actions-slot-padding:0 0 0 0.75rem;display:-ms-flexbox;display:flex;padding:var(--data-ribbon-padding);-ms-flex-align:center;align-items:center;background-color:var(--data-ribbon-bg-color);border-radius:var(--data-ribbon-border-radius)}.kp-data-ribbon__avatar{margin-right:.5rem}.kp-data-ribbon__meta-labels label:not(:last-of-type):after{margin-right:.25rem;margin-left:.25rem;content:\"•\"}.kp-data-ribbon__slots{display:-ms-flexbox;display:flex;margin-left:auto;-ms-flex-align:center;align-items:center}.kp-data-ribbon__actions{padding:var(--data-ribbon-actions-slot-padding)}.kp-data-ribbon__after-actions{padding:var(--data-ribbon-after-actions-slot-padding)}"; }
};

const PlaceholderColorRibbon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: { 'placeholder-color-ribbon': true } }, h("span", { class: { 'placeholder-color-ribbon__chip': true } }), h("span", { class: { 'placeholder-color-ribbon__name': true } }, h("i", null)), h("span", { class: { 'placeholder-color-ribbon__hex-value': true } }, h("i", null))));
    }
    static get style() { return ".placeholder-color-ribbon{--placeholder-color-ribbon-columns:2.125rem 1fr 9.375rem;--placeholder-color-ribbon-padding:0.5rem 1rem;--placeholder-color-ribbon-bg-color:#fff;--placeholder-color-ribbon-border-radius:0.1875rem;--placeholder-color-ribbon-label-font-size:0.75rem;--placeholder-color-ribbon-label-bg-color:#f3f4f6;display:-ms-flexbox;display:flex;padding:var(--placeholder-color-ribbon-padding);-ms-flex-align:center;align-items:center;background-color:var(--placeholder-color-ribbon-bg-color);border-radius:var(--placeholder-color-ribbon-border-radius)}.placeholder-color-ribbon span{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;min-height:1.625rem}.placeholder-color-ribbon span:before{min-width:3.25rem;margin-right:.75rem}.placeholder-color-ribbon span:before,.placeholder-color-ribbon span i{min-height:1.125rem;display:-ms-inline-flexbox;display:inline-flex;padding:.3125rem .5rem;font-size:var(--placeholder-color-ribbon-label-font-size);font-weight:var(--font-weight--bold);text-transform:uppercase;background-color:var(--placeholder-color-ribbon-label-bg-color);border-radius:.1875rem}.placeholder-color-ribbon__chip{width:2rem;height:2rem;background-color:var(--placeholder-color-ribbon-label-bg-color);border-radius:var(--border-radius,.1875rem)}.placeholder-color-ribbon__name{padding-right:1rem;padding-left:1rem;text-transform:capitalize}.placeholder-color-ribbon__name:before{content:\"\"}.placeholder-color-ribbon__name i{min-width:12.5rem}.placeholder-color-ribbon__hex-value{padding-left:1rem;margin-left:auto}.placeholder-color-ribbon__hex-value:before{content:\"\"}.placeholder-color-ribbon__hex-value i{min-width:5rem}"; }
};

export { KpAvatar as kp_avatar, KpAvatarGroup as kp_avatar_group, KpColorChip as kp_color_chip, KpColorRibbon as kp_color_ribbon, KpDataRibbon as kp_data_ribbon, PlaceholderColorRibbon as placeholder_color_ribbon };
