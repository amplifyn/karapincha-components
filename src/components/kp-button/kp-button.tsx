import { Component, Host, h, Element, Prop } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/dist/declarations/component-interfaces';

@Component({
  tag: 'kp-button',
  styleUrl: 'kp-button.scss'
})
export class KpButton {

  @Element() hostElement: HTMLStencilElement;

  // Default props
  @Prop() buttonText: string;
  @Prop() buttonId: string;

  // Button state props
  @Prop() isDefault: boolean = false;
  @Prop() isLarge: boolean = false;
  @Prop() isOutline: boolean = false;
  @Prop() isDisabled: boolean = false;
  @Prop() isInvert: boolean = false;
  @Prop() isText: boolean = false;
  @Prop() isOutlineInvert: boolean = false;
  @Prop() isLoading: boolean = false;
  @Prop() useIcon: boolean = false;
  @Prop() isLoadingIcon: boolean = false;

  // Class names
  private classNames = {
    'kp-button': true,
    'kp-button--large': this.isLarge,
    'kp-button--outline': this.isOutline,
    'kp-button--disabled': this.isDisabled,
    'kp-button--invert': this.isInvert,
    'kp-button--text': this.isText,
    'kp-button--outline-invert': this.isOutlineInvert,
    'kp-button--loading': this.isLoading,
    'kp-button--use-icon': this.useIcon,
    'kp-button--use-icon-loading': this.isLoadingIcon
  }

  render() {
    return (
      <Host>
        <button class={this.classNames} id={this.buttonId}>
          <slot />
        </button>
      </Host>
    );

    // if (this.isLoading) {
    //   return (
    //     <Host>
    //       <button class={this.classNames} id={this.buttonId}>
    //         <kp-spiner></kp-spiner>
    //       </button>
    //     </Host>
    //   );
    // } else if (this.useIcon) {
    //   return (
    //     <Host>
    //       <button class={this.classNames} id={this.buttonId}>
    //         <span class={{ 'kp-button__icon': true }}></span>
    //       </button>
    //     </Host>
    //   );
    // } else {
    //   return (
    //     <Host>
    //       <button class={this.classNames} id={this.buttonId}>{this.buttonText}</button>
    //     </Host>
    //   );
    // }
  }

}
