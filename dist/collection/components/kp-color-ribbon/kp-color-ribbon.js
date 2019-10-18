import { Host, h } from "@stencil/core";
export class KpColorRibbon {
    constructor() {
        this.color = {
            "name": "Lead",
            "weight": "L500",
            "hex": "#212121",
            "rgb": { "r": 33, "g": 33, "b": 33 },
            "distance": 0,
            "luminance": 22.062320231562225,
            "requestedHex": "#212121",
        };
        this.isCard = false;
        this._colorRGB = `rgb(${this.color.rgb.r}, ${this.color.rgb.g}, ${this.color.rgb.b})`;
    }
    componentDidLoad() {
        console.log(this.color);
    }
    render() {
        return (h(Host, { class: { 'kp-color-ribbon': true, 'isCard': this.isCard } },
            h("span", { class: { 'kp-color-ribbon__chip': true }, style: { 'background-color': this.color.hex } }),
            h("span", { class: { 'kp-color-ribbon__name': true } },
                this.color.weight,
                " - ",
                this.color.name),
            h("span", { class: { 'kp-color-ribbon__hex-value': true } }, this.color.hex),
            h("span", { class: { 'kp-color-ribbon__rgb-value': true } }, this._colorRGB)));
    }
    static get is() { return "kp-color-ribbon"; }
    static get originalStyleUrls() { return {
        "$": ["kp-color-ribbon.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["kp-color-ribbon.css"]
    }; }
    static get properties() { return {
        "color": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "{ \"name\": string; \"weight\": string; \"hex\": string; \"rgb\": { \"r\": number; \"g\": number; \"b\": number; }; \"distance\": number; \"luminance\": number; \"requestedHex\": string; }",
                "resolved": "{ \"name\": string; \"weight\": string; \"hex\": string; \"rgb\": { \"r\": number; \"g\": number; \"b\": number; }; \"distance\": number; \"luminance\": number; \"requestedHex\": string; }",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "{\n    \"name\": \"Lead\",\n    \"weight\": \"L500\",\n    \"hex\": \"#212121\",\n    \"rgb\": { \"r\": 33, \"g\": 33, \"b\": 33 },\n    \"distance\": 0,\n    \"luminance\": 22.062320231562225,\n    \"requestedHex\": \"#212121\",\n  }"
        },
        "isCard": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "is-card",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
