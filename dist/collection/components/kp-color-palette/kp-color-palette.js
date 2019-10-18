import { h, Host } from "@stencil/core";
export class KpColorPalette {
    constructor() {
        this.colors = [
            {
                hex: '#f3f4f6',
                name: 'Sample Color ⚠️',
                rgb: 'rgb(243, 244, 246)',
                weight: 'SC500'
            },
            {
                hex: '#000000',
                name: 'Black ⚠️',
                rgb: 'rgb(0, 0, 0)',
                weight: 'B500'
            },
            {
                hex: '#ffffff',
                name: 'White ⚠️',
                rgb: 'rgb(255, 255, 255)',
                weight: 'W500'
            }
        ];
    }
    render() {
        return (h(Host, { class: { "kp-color-palette": true } },
            h("section", { class: { "kp-color-palette__ribbons": true } }, this.colors.map(color => h("kp-color-ribbon", { "color-hex": color.hex, "color-name": color.name, "color-rgb": color.rgb, "color-weight": color.weight }))),
            h("section", { class: { "kp-color-palette__code": true } },
                h("pre", { class: { 'kp-color-generator__code': true } },
                    h("code", { class: { 'language-css': true } },
                        (h("span", { class: { 'selector': true } }, ":root")),
                        (h("span", { class: { 'punctuation': true } }, ` { \n`)),
                        (h("span", { class: { 'comment': true } }, `  // \n`)),
                        this.colors.map((color) => {
                            return ([
                                h("span", { class: "property" }, `  --color-${color.weight}`),
                                h("span", { class: { 'punctuation': true } }, ": "),
                                h("span", { class: "string" }, color.hex),
                                h("span", { class: { 'punctuation': true } }, `;\n`)
                            ]);
                        }),
                        (h("span", { class: { 'punctuation': true } }, `}`)))))));
    }
    static get is() { return "kp-color-palette"; }
    static get originalStyleUrls() { return {
        "$": ["kp-color-palette.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["kp-color-palette.css"]
    }; }
    static get properties() { return {
        "colors": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "colors",
            "reflect": false,
            "defaultValue": "[\n    {\n      hex: '#f3f4f6',\n      name: 'Sample Color \u26A0\uFE0F',\n      rgb: 'rgb(243, 244, 246)',\n      weight: 'SC500'\n    },\n    {\n      hex: '#000000',\n      name: 'Black \u26A0\uFE0F',\n      rgb: 'rgb(0, 0, 0)',\n      weight: 'B500'\n    },\n    {\n      hex: '#ffffff',\n      name: 'White \u26A0\uFE0F',\n      rgb: 'rgb(255, 255, 255)',\n      weight: 'W500'\n    }\n  ]"
        }
    }; }
}
