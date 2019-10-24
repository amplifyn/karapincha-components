'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-453b7d00.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["kp-avatar_6.cjs",[[4,"kp-data-ribbon",{"dataAvatarUrl":[1,"data-avatar-url"],"dataHeading":[1,"data-heading"]}],[4,"kp-avatar-group"],[0,"kp-color-chip",{"color":[1]}],[0,"kp-color-ribbon",{"isCard":[4,"is-card"],"colorName":[1,"color-name"],"colorRgb":[1,"color-rgb"],"colorWeight":[1,"color-weight"],"colorHex":[1,"color-hex"]}],[0,"placeholder-color-ribbon"],[4,"kp-avatar",{"isDefault":[4,"is-default"],"isSmall":[4,"is-small"],"isMedium":[4,"is-medium"],"isLarge":[4,"is-large"],"img":[1],"alt":[1],"name":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
