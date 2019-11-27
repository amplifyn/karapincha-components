import { a as patchEsm, b as bootstrapLazy } from './core-83e9ef95.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["kp-avatar_13",[[0,"kp-button",{"buttonText":[1,"button-text"],"buttonId":[1,"button-id"],"isDefault":[4,"is-default"],"isLarge":[4,"is-large"],"isOutline":[4,"is-outline"],"isDisabled":[4,"is-disabled"],"isInvert":[4,"is-invert"],"isText":[4,"is-text"],"isOutlineInvert":[4,"is-outline-invert"],"isLoading":[4,"is-loading"],"useIcon":[4,"use-icon"],"isLoadingIcon":[4,"is-loading-icon"]}],[4,"kp-data-ribbon",{"dataAvatarUrl":[1,"data-avatar-url"],"dataHeading":[1,"data-heading"]}],[0,"kp-fab",{"dataIconName":[1,"data-icon-name"],"isDisabled":[4,"is-disabled"],"isLoading":[4,"is-loading"]}],[4,"kp-avatar-group"],[0,"kp-color-chip",{"color":[1]}],[0,"kp-color-ribbon",{"isCard":[4,"is-card"],"colorName":[1,"color-name"],"colorRgb":[1,"color-rgb"],"colorWeight":[1,"color-weight"],"colorHex":[1,"color-hex"]}],[0,"kp-input-field",{"fieldType":[1,"field-type"],"placeholderText":[1,"placeholder-text"],"fieldName":[1,"field-name"],"fieldId":[1,"field-id"],"isError":[4,"is-error"]}],[1,"kp-input-group"],[0,"kp-label",{"labelText":[1,"label-text"],"labelFor":[1,"label-for"],"isError":[4,"is-error"]}],[4,"kp-logo",{"imageSrc":[1,"image-src"],"imageAlt":[1,"image-alt"],"isDefault":[4,"is-default"],"isSmall":[4,"is-small"],"isLarge":[4,"is-large"]}],[0,"placeholder-color-ribbon"],[4,"kp-avatar",{"isDefault":[4,"is-default"],"isSmall":[4,"is-small"],"isMedium":[4,"is-medium"],"isLarge":[4,"is-large"],"img":[1],"alt":[1],"name":[1]}],[0,"kp-spiner"]]]], options);
  });
};

export { defineCustomElements };
