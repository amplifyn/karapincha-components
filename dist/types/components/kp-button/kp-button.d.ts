import { HTMLStencilElement } from '@stencil/core/dist/declarations/component-interfaces';
export declare class KpButton {
    hostElement: HTMLStencilElement;
    buttonText: string;
    buttonId: string;
    isDefault: boolean;
    isLarge: boolean;
    isOutline: boolean;
    isDisabled: boolean;
    isInvert: boolean;
    isText: boolean;
    isOutlineInvert: boolean;
    isLoading: boolean;
    useIcon: boolean;
    isLoadingIcon: boolean;
    private classNames;
    render(): any;
}
