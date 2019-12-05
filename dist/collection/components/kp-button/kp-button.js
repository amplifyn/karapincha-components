import { Host, h } from "@stencil/core";
export class KpButton {
    constructor() {
        // Button state props
        this.isDefault = false;
        this.isLarge = false;
        this.isOutline = false;
        this.isDisabled = false;
        this.isInvert = false;
        this.isText = false;
        this.isOutlineInvert = false;
        this.isLoading = false;
        this.useIcon = false;
        this.isLoadingIcon = false;
        // Class names
        this.classNames = {
            'kp-button': true,
            'kp-button--large': this.isLarge,
            'kp-button--outline': this.isOutline,
            'kp-button--disabled': this.isDisabled,
            'kp-button--invert': this.isInvert,
            'kp-button--text': this.isText,
            'kp-button--outline-invert': this.isOutlineInvert,
            'kp-button--loading': this.isLoading,
            'kp-button--use-icon': this.useIcon,
            'kp-button--use-icon-loading': this.isLoadingIcon
        };
    }
    render() {
        return (h(Host, null,
            h("button", { class: this.classNames, id: this.buttonId },
                h("slot", null))));
        // if (this.isLoading) {
        //   return (
        //     <Host>
        //       <button class={this.classNames} id={this.buttonId}>
        //         <kp-spiner></kp-spiner>
        //       </button>
        //     </Host>
        //   );
        // } else if (this.useIcon) {
        //   return (
        //     <Host>
        //       <button class={this.classNames} id={this.buttonId}>
        //         <span class={{ 'kp-button__icon': true }}></span>
        //       </button>
        //     </Host>
        //   );
        // } else {
        //   return (
        //     <Host>
        //       <button class={this.classNames} id={this.buttonId}>{this.buttonText}</button>
        //     </Host>
        //   );
        // }
    }
    static get is() { return "kp-button"; }
    static get originalStyleUrls() { return {
        "$": ["kp-button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["kp-button.css"]
    }; }
    static get properties() { return {
        "buttonText": {
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
            "attribute": "button-text",
            "reflect": false
        },
        "buttonId": {
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
            "attribute": "button-id",
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
        "isOutline": {
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
            "attribute": "is-outline",
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
        "isInvert": {
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
            "attribute": "is-invert",
            "reflect": false,
            "defaultValue": "false"
        },
        "isText": {
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
            "attribute": "is-text",
            "reflect": false,
            "defaultValue": "false"
        },
        "isOutlineInvert": {
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
            "attribute": "is-outline-invert",
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
        },
        "useIcon": {
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
            "attribute": "use-icon",
            "reflect": false,
            "defaultValue": "false"
        },
        "isLoadingIcon": {
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
            "attribute": "is-loading-icon",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get elementRef() { return "hostElement"; }
}
