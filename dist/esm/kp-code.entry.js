import { r as registerInstance, h } from './core-07d50397.js';

const KpCode = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("deckgo-highlight-code", { language: "css" }, h("code", { slot: "code" }, `
:root {
  --color-fuck: #000;
}
          `))));
    }
    static get style() { return ""; }
};

export { KpCode as kp_code };
