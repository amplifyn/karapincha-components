import { Host, h } from "@stencil/core";
export class KpSpiner {
    render() {
        return (h(Host, null,
            h("div", { class: { 'kp-spiner': true } },
                h("div", { class: { 'kp-spiner__element': true } }),
                h("div", { class: { 'kp-spiner__element': true } }),
                h("div", { class: { 'kp-spiner__element': true } }),
                h("div", { class: { 'kp-spiner__element': true } }))));
    }
    static get is() { return "kp-spiner"; }
    static get originalStyleUrls() { return {
        "$": ["kp-spiner.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["kp-spiner.css"]
    }; }
}
