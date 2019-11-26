import { Host, h } from "@stencil/core";
export class KpLabel {
    constructor() {
        // State props
        this.isError = false;
    }
    render() {
        return (h(Host, { class: { 'kp-label': true, 'isError': this.isError } },
            h("label", { htmlFor: this.labelFor, class: { 'kp-label__text': true } }, this.labelText)));
    }
    static get is() { return "kp-label"; }
    static get originalStyleUrls() { return {
        "$": ["kp-label.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["kp-label.css"]
    }; }
    static get properties() { return {
        "labelText": {
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
            "attribute": "label-text",
            "reflect": false
        },
        "labelFor": {
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
            "attribute": "label-for",
            "reflect": false
        },
        "isError": {
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
            "attribute": "is-error",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
