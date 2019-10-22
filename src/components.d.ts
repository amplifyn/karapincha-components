/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface KpColorChip {
    'color': string;
  }
  interface KpColorRibbon {
    'colorHex': string;
    'colorName': string;
    'colorRgb': string;
    'colorWeight': string;
    'isCard': boolean;
  }
  interface PlaceholderColorRibbon {}
}

declare global {


  interface HTMLKpColorChipElement extends Components.KpColorChip, HTMLStencilElement {}
  const HTMLKpColorChipElement: {
    prototype: HTMLKpColorChipElement;
    new (): HTMLKpColorChipElement;
  };

  interface HTMLKpColorRibbonElement extends Components.KpColorRibbon, HTMLStencilElement {}
  const HTMLKpColorRibbonElement: {
    prototype: HTMLKpColorRibbonElement;
    new (): HTMLKpColorRibbonElement;
  };

  interface HTMLPlaceholderColorRibbonElement extends Components.PlaceholderColorRibbon, HTMLStencilElement {}
  const HTMLPlaceholderColorRibbonElement: {
    prototype: HTMLPlaceholderColorRibbonElement;
    new (): HTMLPlaceholderColorRibbonElement;
  };
  interface HTMLElementTagNameMap {
    'kp-color-chip': HTMLKpColorChipElement;
    'kp-color-ribbon': HTMLKpColorRibbonElement;
    'placeholder-color-ribbon': HTMLPlaceholderColorRibbonElement;
  }
}

declare namespace LocalJSX {
  interface KpColorChip {
    'color'?: string;
  }
  interface KpColorRibbon {
    'colorHex'?: string;
    'colorName'?: string;
    'colorRgb'?: string;
    'colorWeight'?: string;
    'isCard'?: boolean;
  }
  interface PlaceholderColorRibbon {}

  interface IntrinsicElements {
    'kp-color-chip': KpColorChip;
    'kp-color-ribbon': KpColorRibbon;
    'placeholder-color-ribbon': PlaceholderColorRibbon;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'kp-color-chip': LocalJSX.KpColorChip & JSXBase.HTMLAttributes<HTMLKpColorChipElement>;
      'kp-color-ribbon': LocalJSX.KpColorRibbon & JSXBase.HTMLAttributes<HTMLKpColorRibbonElement>;
      'placeholder-color-ribbon': LocalJSX.PlaceholderColorRibbon & JSXBase.HTMLAttributes<HTMLPlaceholderColorRibbonElement>;
    }
  }
}


