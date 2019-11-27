import { Host, h } from "@stencil/core";
export class KpButton {
    constructor() {
        // Button state props
        this.isDefault = false;
        this.isLarge = false;
        this.isDisabled = false;
        this.isLoading = false;
        // Class names
        this.classNames = {
            'kp-button': true,
            'kp-button--large': this.isLarge,
            'kp-button--disabled': this.isDisabled,
            'kp-button--loading': this.isLoading
        };
    }
    render() {
        if (this.isLoading) {
            return (h(Host, null,
                h("button", { class: this.classNames, id: this.btnId },
                    h("kp-spiner", null))));
        }
        else {
            return (h(Host, null,
                h("button", { class: this.classNames, id: this.btnId }, this.text)));
        }
    }
    static get is() { return "kp-button"; }
    static get originalStyleUrls() { return {
        "$": ["kp-button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["kp-button.css"]
    }; }
    static get properties() { return {
        "text": {
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
            "attribute": "text",
            "reflect": false
        },
        "btnId": {
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
            "attribute": "btn-id",
            "reflect": false
        },
        "isDefault": {
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
            "attribute": "is-default",
            "reflect": false,
            "defaultValue": "false"
        },
        "isLarge": {
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
            "attribute": "is-large",
            "reflect": false,
            "defaultValue": "false"
        },
        "isDisabled": {
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
            "attribute": "is-disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "isLoading": {
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
            "attribute": "is-loading",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
