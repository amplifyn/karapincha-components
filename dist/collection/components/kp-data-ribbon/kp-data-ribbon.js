import { Host, h } from "@stencil/core";
export class KpDataRibbon {
    constructor() {
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
                    h("span", { class: { 'kp-data-ribbon__meta-labels': true } },
                        h("slot", { name: 'labels' }))
                ];
            }
            return false;
        };
        this.renderMeta = () => {
            if (this.dataHeading || this.hasLabelsSlot) {
                return [
                    h("div", { class: { 'kp-data-ribbon__meta': true } },
                        this.renderHeading(),
                        this.renderMetaData())
                ];
            }
            return false;
        };
        this.renderActionsSlot = () => {
            if (this.hasActionsSlot) {
                return [h("div", { class: { 'kp-data-ribbon__actions': true } },
                        h("slot", { name: 'actions' }))];
            }
            return false;
        };
        this.renderAfterActionsSlot = () => {
            if (this.hasAfterActionsSlot) {
                return [h("div", { class: { 'kp-data-ribbon__after-actions': true } },
                        h("slot", { name: 'after-actions' }))];
            }
            return false;
        };
        this.renderSlots = () => {
            if (this.hasActionsSlot || this.hasAfterActionsSlot) {
                return [
                    h("div", { class: "kp-data-ribbon__slots" },
                        this.renderActionsSlot(),
                        this.renderAfterActionsSlot())
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
        return (h(Host, { class: this.classNames },
            this.renderAvatar(),
            this.renderMeta(),
            this.renderSlots()));
    }
    static get is() { return "kp-data-ribbon"; }
    static get originalStyleUrls() { return {
        "$": ["kp-data-ribbon.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["kp-data-ribbon.css"]
    }; }
    static get properties() { return {
        "dataAvatarUrl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "data-avatar-url",
            "reflect": false
        },
        "dataHeading": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "data-heading",
            "reflect": false
        }
    }; }
    static get elementRef() { return "hostElement"; }
}
