'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-c4c5a6e0.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["kp-color-ribbon.cjs",[[0,"kp-color-ribbon",{"color":[16],"isCard":[4,"is-card"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
