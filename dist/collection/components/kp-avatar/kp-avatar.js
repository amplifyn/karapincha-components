import { Host, h } from "@stencil/core";
export class KpAvatar {
    constructor() {
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
            return h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 72 82" },
                h("defs", null),
                h("path", { fill: "#000", "fill-rule": "nonzero", d: "M20 44c2-1 3-1 4 1a16 16 0 0023 1l1-1c1-1 2-2 4-1 11 4 19 16 19 28v6c0 2-1 3-3 3H4c-2 0-3-1-3-3v-6c0-12 8-24 19-28zM36 1a20 20 0 110 40 20 20 0 010-40z" }));
        };
    }
    render() {
        if (this.isDefault) {
            return (h(Host, { class: this.classNames }, this.defaultAvatar()));
        }
        else if (this.img !== null && this.img !== undefined && this.img !== '') {
            return (h(Host, { class: this.classNames },
                h("img", { src: this.img, alt: this.alt })));
        }
        else {
            return (h(Host, { class: this.classNames },
                h("slot", null)));
        }
    }
    static get is() { return "kp-avatar"; }
    static get originalStyleUrls() { return {
        "$": ["kp-avatar.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["kp-avatar.css"]
    }; }
    static get properties() { return {
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
        "isSmall": {
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
            "attribute": "is-small",
            "reflect": false,
            "defaultValue": "false"
        },
        "isMedium": {
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
            "attribute": "is-medium",
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
        "img": {
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
            "attribute": "img",
            "reflect": false
        },
        "alt": {
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
            "attribute": "alt",
            "reflect": false
        },
        "name": {
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
            "attribute": "name",
            "reflect": false
        }
    }; }
}
