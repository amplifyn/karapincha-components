import { Host, h } from "@stencil/core";
export class KpColorChip {
    render() {
        return (h(Host, { class: { 'kp-color-chip': true } },
            h("span", { class: { 'kp-color-chip__preview': true }, style: { 'background-color': this.color } }),
            h("span", { class: { 'kp-color-chip__value': true } }, this.color)));
    }
    static get is() { return "kp-color-chip"; }
    static get originalStyleUrls() { return {
        "$": ["kp-color-chip.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["kp-color-chip.css"]
    }; }
    static get properties() { return {
        "color": {
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
            "attribute": "color",
            "reflect": false
        }
    }; }
}
