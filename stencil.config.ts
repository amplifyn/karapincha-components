import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'karapincha',
  globalStyle: 'src/styles/global.scss',
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'https://karapincha.amplifyn.io/',
      serviceWorker: null
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/styles/_config-scss.scss',
        'src/styles/functions/_unit-conversion.scss'
      ],
      outputStyle: 'compressed'
    })
  ],
  enableCache: false
};