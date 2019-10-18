import { r as registerInstance, h, H as Host } from './core-07d50397.js';

const KpColorPalette = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { class: { "kp-color-palette": true } }, h("section", { class: { "kp-color-palette__ribbons": true } }, this.colors.map(color => h("kp-color-ribbon", { "color-hex": color.hex, "color-name": color.name, "color-rgb": color.rgb, "color-weight": color.weight }))), h("section", { class: { "kp-color-palette__code": true } }, h("pre", { class: { 'kp-color-generator__code': true } }, h("code", { class: { 'language-css': true } }, (h("span", { class: { 'selector': true } }, ":root")), (h("span", { class: { 'punctuation': true } }, ` { \n`)), (h("span", { class: { 'comment': true } }, `  // \n`)), this.colors.map((color) => {
            return ([
                h("span", { class: "property" }, `  --color-${color.weight}`),
                h("span", { class: { 'punctuation': true } }, ": "),
                h("span", { class: "string" }, color.hex),
                h("span", { class: { 'punctuation': true } }, `;\n`)
            ]);
        }), (h("span", { class: { 'punctuation': true } }, `}`)))))));
    }
    static get style() { return ".kp-color-palette{display:grid;grid-template-columns:auto 300px;-webkit-column-gap:1rem;-moz-column-gap:1rem;column-gap:1rem}.kp-color-palette *,.kp-color-palette :after,.kp-color-palette :before{-webkit-box-sizing:border-box;box-sizing:border-box}.kp-color-palette__ribbons{display:grid;row-gap:1em}.kp-color-palette__code pre{background:#212431;margin:0;padding:1em 2em;width:100%;height:100%;color:#80a9e6;border-radius:3px}.kp-color-palette__code code{white-space:pre-wrap}.kp-color-palette__code code .cdata,.kp-color-palette__code code .comment,.kp-color-palette__code code .doctype,.kp-color-palette__code code .prolog{color:#708090}.kp-color-palette__code code .punctuation{color:#999}.kp-color-palette__code code .boolean,.kp-color-palette__code code .constant,.kp-color-palette__code code .deleted,.kp-color-palette__code code .number,.kp-color-palette__code code .property,.kp-color-palette__code code .symbol,.kp-color-palette__code code .tag{color:#e4e4e4}.kp-color-palette__code code .attr-name,.kp-color-palette__code code .builtin,.kp-color-palette__code code .char,.kp-color-palette__code code .inserted,.kp-color-palette__code code .selector{color:#c678dd}.kp-color-palette__code code .entity,.kp-color-palette__code code .language-css .string,.kp-color-palette__code code .operator,.kp-color-palette__code code .string,.kp-color-palette__code code .url{color:#e90}.kp-color-palette__code code .atrule,.kp-color-palette__code code .attr-value,.kp-color-palette__code code .keyword{color:#07a}.kp-color-palette__code code .class-name,.kp-color-palette__code code .function{color:#dd4a68}.kp-color-palette__code code .important,.kp-color-palette__code code .regex,.kp-color-palette__code code .variable{color:#e90}"; }
};

const KpColorRibbon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isCard = false;
        this.colorName = 'Sample Color ⚠️';
        this.colorRgb = 'rgb(243, 244, 246)';
        this.colorWeight = 'SC500';
        this.colorHex = '#f3f4f6';
    }
    render() {
        return (h(Host, { class: { 'kp-color-ribbon': true, 'isCard': this.isCard } }, h("span", { class: { 'kp-color-ribbon__chip': true }, style: { 'background-color': this.colorHex.toUpperCase() } }), h("span", { class: { 'kp-color-ribbon__name': true } }, this.colorWeight, " - ", this.colorName), h("span", { class: { 'kp-color-ribbon__hex-value': true } }, this.colorHex.toUpperCase()), this.isCard ? h("span", { class: { 'kp-color-ribbon__rgb-value': true } }, this.colorRgb) : false));
    }
    static get style() { return ".kp-color-ribbon{--kp-color-ribbon-columns:2.125rem 1fr 9.375rem;--kp-color-ribbon-padding:0.5rem;--kp-color-ribbon-bg-color:#fff;--kp-color-ribbon-border-radius:0.1875rem;--kp-color-ribbon-box-shadow:0 0.625rem 2.5rem -0.625rem rgba(0,64,128,0.12);--kp-color-ribbon-label-font-size:0.75rem;--kp-color-ribbon-label-bg-color:#f3f4f6;display:-ms-flexbox;display:flex;padding:var(--kp-color-ribbon-padding);-ms-flex-align:center;align-items:center;background-color:var(--kp-color-ribbon-bg-color);-webkit-box-shadow:var(--kp-color-ribbon-box-shadow);box-shadow:var(--kp-color-ribbon-box-shadow);border-radius:var(--kp-color-ribbon-border-radius)}.kp-color-ribbon.isCard{--kp-color-ribbon-columns:1fr;--kp-color-ribbon-padding:1rem 1rem 1.5rem;--kp-color-ribbon-border-radius:0.1875rem;--kp-color-ribbon-box-shadow:0 0.625rem 2.5rem -0.625rem rgba(0,64,128,0.12);--kp-color-ribbon-label-font-size:0.75rem}.kp-color-ribbon span{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.kp-color-ribbon span:before{display:-ms-inline-flexbox;display:inline-flex;padding:.3125rem .5rem;margin-right:.75rem;font-size:var(--kp-color-ribbon-label-font-size);font-weight:var(--font-weight--bold);text-transform:uppercase;background-color:var(--kp-color-ribbon-label-bg-color);border-radius:.1875rem}.kp-color-ribbon.isCard{display:grid;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;row-gap:.5rem}.kp-color-ribbon.isCard span:before{width:3.75rem;-ms-flex-pack:center;justify-content:center}.kp-color-ribbon__chip{width:2rem;height:2rem;background-color:var(--kp-color-ribbon-label-bg-color);border-radius:var(--border-radius,.1875rem)}.isCard .kp-color-ribbon__chip{width:100%;height:4.125rem;margin-bottom:.5rem}.kp-color-ribbon__name{padding-right:1rem;padding-left:1rem;text-transform:capitalize}.kp-color-ribbon__name:before{content:\"Name\"}.isCard .kp-color-ribbon__name{padding:0}.kp-color-ribbon__hex-value{padding-left:1rem;margin-left:auto}.kp-color-ribbon__hex-value:before{content:\"Hex\"}.isCard .kp-color-ribbon__hex-value{padding:0;margin-left:unset}.kp-color-ribbon__rgb-value{padding-left:1rem;margin-left:auto}.kp-color-ribbon__rgb-value:before{content:\"RGB\"}.isCard .kp-color-ribbon__rgb-value{padding:0;margin-left:unset}"; }
};

export { KpColorPalette as kp_color_palette, KpColorRibbon as kp_color_ribbon };
