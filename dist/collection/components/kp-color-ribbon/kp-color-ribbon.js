import { Host, h } from "@stencil/core";
export class KpColorRibbon {
    constructor() {
        this.isCard = false;
        this.colorName = 'Sample Color ⚠️';
        this.colorRgb = 'rgb(243, 244, 246)';
        this.colorWeight = 'SC500';
        this.colorHex = '#f3f4f6';
    }
    render() {
        return (h(Host, { class: { 'kp-color-ribbon': true, 'isCard': this.isCard } },
            h("span", { class: { 'kp-color-ribbon__chip': true }, style: { 'background-color': this.colorHex.toUpperCase() } }),
            h("span", { class: { 'kp-color-ribbon__name': true } },
                this.colorWeight,
                " - ",
                this.colorName),
            h("span", { class: { 'kp-color-ribbon__hex-value': true } }, this.colorHex.toUpperCase()),
            h("span", { class: { 'kp-color-ribbon__rgb-value': true } }, this.colorRgb)));
    }
    static get is() { return "kp-color-ribbon"; }
    static get originalStyleUrls() { return {
        "$": ["kp-color-ribbon.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["kp-color-ribbon.css"]
    }; }
    static get properties() { return {
        "isCard": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "is-card",
            "reflect": false,
            "defaultValue": "false"
        },
        "colorName": {
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
            "attribute": "color-name",
            "reflect": false,
            "defaultValue": "'Sample Color \u26A0\uFE0F'"
        },
        "colorRgb": {
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
            "attribute": "color-rgb",
            "reflect": false,
            "defaultValue": "'rgb(243, 244, 246)'"
        },
        "colorWeight": {
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
            "attribute": "color-weight",
            "reflect": false,
            "defaultValue": "'SC500'"
        },
        "colorHex": {
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
            "attribute": "color-hex",
            "reflect": false,
            "defaultValue": "'#f3f4f6'"
        }
    }; }
}
