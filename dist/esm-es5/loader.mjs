import { a as patchEsm, b as bootstrapLazy } from './core-c34c17d1.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["kp-color-ribbon", [[0, "kp-color-ribbon", { "color": [16], "isCard": [4, "is-card"] }]]]], options);
    });
};
export { defineCustomElements };
