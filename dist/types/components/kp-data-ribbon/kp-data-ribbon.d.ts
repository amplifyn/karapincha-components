import { HTMLStencilElement } from '@stencil/core/dist/declarations/component-interfaces';
export declare class KpDataRibbon {
    hostElement: HTMLStencilElement;
    dataAvatarUrl: string;
    dataHeading: string;
    private hasLabelsSlot;
    private hasActionsSlot;
    private hasAfterActionsSlot;
    private classNames;
    private renderAvatar;
    private renderHeading;
    private renderMetaData;
    private renderMeta;
    private renderActionsSlot;
    private renderAfterActionsSlot;
    private renderSlots;
    componentWillLoad(): void;
    render(): any;
}
