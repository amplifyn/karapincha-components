import { h, Host } from "@stencil/core";
export class PlaceholderColorRibbon {
    render() {
        return (h(Host, { class: { 'placeholder-color-ribbon': true } },
            h("span", { class: { 'placeholder-color-ribbon__chip': true } }),
            h("span", { class: { 'placeholder-color-ribbon__name': true } },
                h("i", null)),
            h("span", { class: { 'placeholder-color-ribbon__hex-value': true } },
                h("i", null))));
    }
    static get is() { return "placeholder-color-ribbon"; }
    static get originalStyleUrls() { return {
        "$": ["placeholder-color-ribbon.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["placeholder-color-ribbon.css"]
    }; }
}
