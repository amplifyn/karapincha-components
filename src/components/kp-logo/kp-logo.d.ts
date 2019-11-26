import { HTMLStencilElement } from '@stencil/core/dist/declarations/component-interfaces';
export declare class KpLogo {
    hostElement: HTMLStencilElement;
    imageSrc: string;
    imageAlt: string;
    isDefault: boolean;
    isSmall: boolean;
    isLarge: boolean;
    private classNames;
    private prevDefaultImg;
    render(): any;
}
