import { h } from "@stencil/core";
export class KpCode {
    render() {
        return (h("div", null,
            h("deckgo-highlight-code", { language: "css" },
                h("code", { slot: "code" }, `
:root {
  --color-fuck: #000;
}
          `))));
    }
    static get is() { return "kp-code"; }
    static get originalStyleUrls() { return {
        "$": ["kp-code.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["kp-code.css"]
    }; }
}
