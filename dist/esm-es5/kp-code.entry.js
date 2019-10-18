import { r as registerInstance, h } from './core-07d50397.js';
var KpCode = /** @class */ (function () {
    function KpCode(hostRef) {
        registerInstance(this, hostRef);
    }
    KpCode.prototype.render = function () {
        return (h("div", null, h("deckgo-highlight-code", { language: "css" }, h("code", { slot: "code" }, "\n:root {\n  --color-fuck: #000;\n}\n          "))));
    };
    Object.defineProperty(KpCode, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return KpCode;
}());
export { KpCode as kp_code };
