import { r as registerInstance, h, H as Host, c as getElement } from './core-2513ca9d.js';

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
    static get style() { return ".kp-data-ribbon{--data-ribbon-border-radius: 0.1875rem;--data-ribbon-bg-color: #ffffff;--data-ribbon-padding: 0.5rem 1rem;--data-ribbon-actions-slot-padding: 0;--data-ribbon-after-actions-slot-padding: 0 0 0 0.75rem;display:-ms-flexbox;display:flex;padding:var(--data-ribbon-padding);-ms-flex-align:center;align-items:center;background-color:var(--data-ribbon-bg-color);border-radius:var(--data-ribbon-border-radius)}.kp-data-ribbon__avatar{margin-right:.5rem}.kp-data-ribbon__meta-labels label:not(:last-of-type):after{margin-right:.25rem;margin-left:.25rem;content:\"•\"}.kp-data-ribbon__slots{display:-ms-flexbox;display:flex;margin-left:auto;-ms-flex-align:center;align-items:center}.kp-data-ribbon__actions{padding:var(--data-ribbon-actions-slot-padding)}.kp-data-ribbon__after-actions{padding:var(--data-ribbon-after-actions-slot-padding)}"; }
};

export { KpDataRibbon as kp_data_ribbon };
