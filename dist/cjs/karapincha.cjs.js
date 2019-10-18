'use strict';

const core = require('./core-b165479f.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["kp-color-ribbon.cjs",[[0,"kp-color-ribbon",{"color":[16],"isCard":[4,"is-card"]}]]]], options);
});
