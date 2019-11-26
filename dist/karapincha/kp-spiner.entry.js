import { r as registerInstance, h, H as Host } from './core-2513ca9d.js';

const KpSpiner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("div", { class: { 'kp-spiner': true } }, h("div", { class: { 'kp-spiner__element': true } }), h("div", { class: { 'kp-spiner__element': true } }), h("div", { class: { 'kp-spiner__element': true } }), h("div", { class: { 'kp-spiner__element': true } }))));
    }
    static get style() { return ".kp-spiner{position:relative;--kp-spiner-width: 1.25rem;--kp-spiner-height: 1.25rem;width:var(--kp-spiner-width);height:var(--kp-spiner-height)}.kp-spiner__element{--kp-spiner-element-width: 1.25rem;--kp-spiner-element-height: 1.25rem;--kp-spiner-element-border-width: 0.125rem;--kp-spiner-element-border-color: 1.25rem;--kp-spiner-element-border-color: #fff;--kp-spiner-element-separate-border-color: #fff transparent transparent transparent;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;width:var(--kp-spiner-element-width);height:var(--kp-spiner-element-height);border:var(--kp-spiner-element-border-width) solid var(--kp-spiner-element-border-color);border-radius:50%;-webkit-animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:var(--kp-spiner-element-separate-border-color)}.kp-spiner__element:nth-child(1){-webkit-animation-delay:-0.45s;animation-delay:-0.45s}.kp-spiner__element:nth-child(2){-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.kp-spiner__element:nth-child(3){-webkit-animation-delay:-0.15s;animation-delay:-0.15s}\@-webkit-keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\@keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"; }
};

export { KpSpiner as kp_spiner };
