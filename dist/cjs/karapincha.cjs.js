'use strict';

const core = require('./core-c4c5a6e0.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["kp-color-ribbon.cjs",[[0,"kp-color-ribbon",{"color":[16],"isCard":[4,"is-card"]}]]]], options);
});
