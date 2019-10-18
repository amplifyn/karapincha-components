import { a as patchEsm, b as bootstrapLazy } from './core-07d50397.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["kp-code", [[0, "kp-code"]]], ["kp-color-palette_2", [[0, "kp-color-palette", { "colors": [8] }], [0, "kp-color-ribbon", { "isCard": [4, "is-card"], "colorName": [1, "color-name"], "colorRgb": [1, "color-rgb"], "colorWeight": [1, "color-weight"], "colorHex": [1, "color-hex"] }]]], ["deckgo-highlight-code", [[1, "deckgo-highlight-code", { "src": [1], "anchor": [1], "anchorZoom": [1, "anchor-zoom"], "hideAnchor": [4, "hide-anchor"], "language": [513], "highlightLines": [513, "highlight-lines"], "lineNumbers": [516, "line-numbers"], "editable": [4], "editing": [32], "load": [64], "findNextAnchor": [64], "zoomCode": [64] }, [[4, "prismLanguageLoaded", "languageLoaded"]]]]]], options);
    });
};
export { defineCustomElements };
