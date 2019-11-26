import { r as registerInstance, h, H as Host } from './core-2513ca9d.js';

const KpAvatarGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return "kp-avatar-group{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}kp-avatar-group kp-avatar:not(:first-of-type){margin-left:-12px}"; }
};

export { KpAvatarGroup as kp_avatar_group };
