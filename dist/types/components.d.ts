/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';


export namespace Components {
  interface KpColorRibbon {
    'colorHex': string;
    'colorName': string;
    'colorRgb': string;
    'colorWeight': string;
    'isCard': boolean;
  }
}

declare global {


  interface HTMLKpColorRibbonElement extends Components.KpColorRibbon, HTMLStencilElement {}
  const HTMLKpColorRibbonElement: {
    prototype: HTMLKpColorRibbonElement;
    new (): HTMLKpColorRibbonElement;
  };
  interface HTMLElementTagNameMap {
    'kp-color-ribbon': HTMLKpColorRibbonElement;
  }
}

declare namespace LocalJSX {
  interface KpColorRibbon {
    'colorHex'?: string;
    'colorName'?: string;
    'colorRgb'?: string;
    'colorWeight'?: string;
    'isCard'?: boolean;
  }

  interface IntrinsicElements {
    'kp-color-ribbon': KpColorRibbon;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'kp-color-ribbon': LocalJSX.KpColorRibbon & JSXBase.HTMLAttributes<HTMLKpColorRibbonElement>;
    }
  }
}


