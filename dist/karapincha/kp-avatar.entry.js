import { r as registerInstance, h, H as Host } from './core-2513ca9d.js';

const KpAvatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isDefault = false;
        this.isSmall = false;
        this.isMedium = false;
        this.isLarge = false;
        this.classNames = {
            'kp-avatar': true,
            'is-medium': this.isMedium,
            'is-large': this.isLarge
        };
        this.defaultAvatar = () => {
            return h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 72 82" }, h("defs", null), h("path", { fill: "#000", "fill-rule": "nonzero", d: "M20 44c2-1 3-1 4 1a16 16 0 0023 1l1-1c1-1 2-2 4-1 11 4 19 16 19 28v6c0 2-1 3-3 3H4c-2 0-3-1-3-3v-6c0-12 8-24 19-28zM36 1a20 20 0 110 40 20 20 0 010-40z" }));
        };
    }
    render() {
        if (this.isDefault) {
            return (h(Host, { class: this.classNames }, this.defaultAvatar()));
        }
        else if (this.img !== null && this.img !== undefined && this.img !== '') {
            return (h(Host, { class: this.classNames }, h("img", { src: this.img, alt: this.alt })));
        }
        else {
            return (h(Host, { class: this.classNames }, h("slot", null)));
        }
    }
    static get style() { return "kp-avatar{--avatar-size: 1.5rem;--avatar-font-size: 0.5625rem;--avatar-bg-color: #f2f3f4;--avatar-default-color: #cacbd1;--avatar-border-color: #f2f3f4;--avatar-border-size: 1px;position:relative;z-index:0;display:-ms-inline-flexbox;display:inline-flex;width:var(--avatar-size);height:var(--avatar-size);overflow:hidden;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-size:var(--avatar-font-size);line-height:16px;letter-spacing:-0.04px;text-align:center;background-color:var(--avatar-bg-color);border:var(--avatar-border-size) solid var(--avatar-border-color);border-radius:50%;cursor:pointer}kp-avatar.is-medium{--avatar-size: 1.75rem;--avatar-font-size: 0.625rem}kp-avatar.is-large{--avatar-size: 2.25rem;--avatar-font-size: 0.8125rem}kp-avatar svg{position:absolute;bottom:0;left:50%;width:calc(var(--avatar-size) - 30%);-webkit-transform:translateX(-50%);transform:translateX(-50%)}kp-avatar svg path{fill:var(--avatar-default-color)}kp-avatar img{width:var(--avatar-size);height:var(--avatar-size);-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}"; }
};

export { KpAvatar as kp_avatar };
