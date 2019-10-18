import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'karapincha',
  globalStyle: 'src/styles/global.scss',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www'
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