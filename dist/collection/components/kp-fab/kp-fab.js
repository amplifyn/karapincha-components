import { Host, h } from "@stencil/core";
export class KpFab {
    constructor() {
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
            return (h(Host, { class: { 'kp-fab': true } },
                h("button", { class: this.buttonClassNames },
                    h("kp-spiner", null))));
        }
        else {
            return (h(Host, { class: { 'kp-fab': true } },
                h("button", { class: this.buttonClassNames },
                    h("icon", { class: this.iconClassGenerate(this.removeWhiteSpacesClass(this.dataIconName)) }))));
        }
    }
    static get is() { return "kp-fab"; }
    static get originalStyleUrls() { return {
        "$": ["kp-fab.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["kp-fab.css"]
    }; }
    static get properties() { return {
        "dataIconName": {
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
            "attribute": "data-icon-name",
            "reflect": false
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
