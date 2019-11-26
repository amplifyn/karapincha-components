import { Host, h } from "@stencil/core";
export class KpInputGroup {
    render() {
        return (h(Host, { class: { 'kp-input-group': true } },
            h("slot", null)));
    }
    static get is() { return "kp-input-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["kp-input-group.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["kp-input-group.css"]
    }; }
}
