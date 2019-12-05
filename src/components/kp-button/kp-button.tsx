import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'kp-button',
  styleUrl: 'kp-button.scss'
})
export class KpButton {
  @Prop() isBlock: boolean = false;
  @Prop() isDefault: boolean = false;
  @Prop() isType: string = 'button';
  // @Prop() isLarge: boolean = false;
  // @Prop() isOutline: boolean = false;
  // @Prop() isDisabled: boolean = false;
  // @Prop() isInvert: boolean = false;
  // @Prop() isText: boolean = false;
  // @Prop() isOutlineInvert: boolean = false;
  // @Prop() isLoading: boolean = false;
  // @Prop() useIcon: boolean = false;
  // @Prop() isLoadingIcon: boolean = false;

  // Class names
  private classNames = {
    'kp-button': true,
    // 'kp-button--block': this.isBlock,
    // 'kp-button--outline': this.isOutline,
    // 'kp-button--disabled': this.isDisabled,
    // 'kp-button--invert': this.isInvert,
    // 'kp-button--text': this.isText,
    // 'kp-button--outline-invert': this.isOutlineInvert,
    // 'kp-button--loading': this.isLoading,
    // 'kp-button--use-icon': this.useIcon,
    // 'kp-button--use-icon-loading': this.isLoadingIcon
  }

  private hostClassNames = {
    'kp-button--block': this.isBlock,
  }

  render() {
    return (
      <Host class={this.hostClassNames}>
        <button class={this.classNames} type={this.isType}>
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
