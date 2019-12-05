import { Host, h } from "@stencil/core";
export class KpButton {
    constructor() {
        this.isBlock = false;
        this.isDefault = false;
        this.isType = 'button';
        // @Prop() isLarge: boolean = false;
        // @Prop() isOutline: boolean = false;
        // @Prop() isDisabled: boolean = false;
        // @Prop() isInvert: boolean = false;
        // @Prop() isText: boolean = false;
        // @Prop() isOutlineInvert: boolean = false;
        // @Prop() isLoading: boolean = false;
        // @Prop() useIcon: boolean = false;
        // @Prop() isLoadingIcon: boolean = false;
        // Class names
        this.classNames = {
            'kp-button': true,
        };
        this.hostClassNames = {
            'kp-button--block': this.isBlock,
        };
    }
    render() {
        return (h(Host, { class: this.hostClassNames },
            h("button", { class: this.classNames, type: this.isType },
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
        "isBlock": {
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
            "attribute": "is-block",
            "reflect": false,
            "defaultValue": "false"
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
        "isType": {
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
            "attribute": "is-type",
            "reflect": false,
            "defaultValue": "'button'"
        }
    }; }
}
