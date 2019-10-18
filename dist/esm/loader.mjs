import { a as patchEsm, b as bootstrapLazy } from './core-805626da.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["kp-color-ribbon",[[0,"kp-color-ribbon",{"isCard":[4,"is-card"],"colorName":[1,"color-name"],"colorRgb":[1,"color-rgb"],"colorWeight":[1,"color-weight"],"colorHex":[1,"color-hex"]}]]]], options);
  });
};

export { defineCustomElements };
