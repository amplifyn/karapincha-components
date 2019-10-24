import { Host, h } from "@stencil/core";
export class KpAvatarGroup {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "kp-avatar-group"; }
    static get originalStyleUrls() { return {
        "$": ["kp-avatar-group.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["kp-avatar-group.css"]
    }; }
}
