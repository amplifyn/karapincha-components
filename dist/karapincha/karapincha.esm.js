import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-8710fcfc.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["kp-color-chip",[[0,"kp-color-chip",{"color":[1]}]]],["kp-color-ribbon",[[0,"kp-color-ribbon",{"isCard":[4,"is-card"],"colorName":[1,"color-name"],"colorRgb":[1,"color-rgb"],"colorWeight":[1,"color-weight"],"colorHex":[1,"color-hex"]}]]],["placeholder-color-ribbon",[[0,"placeholder-color-ribbon"]]]], options);
});
