import { Host, h } from "@stencil/core";
export class KpInputField {
    constructor() {
        this.placeholderText = 'This is default placeholder';
        // State props
        this.isError = false;
    }
    render() {
        return (h(Host, null,
            h("input", { type: this.fieldType, placeholder: this.placeholderText, name: this.fieldName, id: this.fieldId, class: { 'kp-input-field': true, 'isError': this.isError } })));
    }
    static get is() { return "kp-input-field"; }
    static get originalStyleUrls() { return {
        "$": ["kp-input-field.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["kp-input-field.css"]
    }; }
    static get properties() { return {
        "fieldType": {
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
            "attribute": "field-type",
            "reflect": false
        },
        "placeholderText": {
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
            "attribute": "placeholder-text",
            "reflect": false,
            "defaultValue": "'This is default placeholder'"
        },
        "fieldName": {
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
            "attribute": "field-name",
            "reflect": false
        },
        "fieldId": {
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
            "attribute": "field-id",
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
