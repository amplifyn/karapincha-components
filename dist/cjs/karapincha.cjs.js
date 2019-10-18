'use strict';

const core = require('./core-5a9694b9.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["kp-code.cjs",[[0,"kp-code"]]],["kp-color-palette_2.cjs",[[0,"kp-color-palette",{"colors":[8]}],[0,"kp-color-ribbon",{"isCard":[4,"is-card"],"colorName":[1,"color-name"],"colorRgb":[1,"color-rgb"],"colorWeight":[1,"color-weight"],"colorHex":[1,"color-hex"]}]]],["deckgo-highlight-code.cjs",[[1,"deckgo-highlight-code",{"src":[1],"anchor":[1],"anchorZoom":[1,"anchor-zoom"],"hideAnchor":[4,"hide-anchor"],"language":[513],"highlightLines":[513,"highlight-lines"],"lineNumbers":[516,"line-numbers"],"editable":[4],"editing":[32],"load":[64],"findNextAnchor":[64],"zoomCode":[64]},[[4,"prismLanguageLoaded","languageLoaded"]]]]]], options);
});
