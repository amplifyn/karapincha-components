'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-5a9694b9.js');

const KpCode = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h("div", null, core.h("deckgo-highlight-code", { language: "css" }, core.h("code", { slot: "code" }, `
:root {
  --color-fuck: #000;
}
          `))));
    }
    static get style() { return ""; }
};

exports.kp_code = KpCode;
