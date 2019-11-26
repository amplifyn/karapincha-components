import { r as registerInstance, h, H as Host } from './core-2513ca9d.js';

const KpInputGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: { 'kp-input-group': true } }, h("slot", null)));
    }
    static get style() { return ":host{display:block}"; }
};

export { KpInputGroup as kp_input_group };
