'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-49111143.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["kp-color-chip_2.cjs",[[0,"kp-color-chip",{"color":[1]}],[0,"kp-color-ribbon",{"isCard":[4,"is-card"],"colorName":[1,"color-name"],"colorRgb":[1,"color-rgb"],"colorWeight":[1,"color-weight"],"colorHex":[1,"color-hex"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
