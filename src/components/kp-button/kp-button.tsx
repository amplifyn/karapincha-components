import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'kp-button',
  styleUrl: 'kp-button.scss'
})
export class KpButton {

  // Default props
  @Prop() text: string;
  @Prop() btnId: string;

  // Button state props
  @Prop() isDefault: boolean = false;
  @Prop() isLarge: boolean = false;
  @Prop() isDisabled: boolean = false;
  @Prop() isLoading: boolean = false;

  // Class names
  private classNames = {
    'kp-button': true,
    'kp-button--large': this.isLarge,
    'kp-button--disabled': this.isDisabled,
    'kp-button--loading': this.isLoading
  }

  render() {
    if(this.isLoading) {
      return (
        <Host>
          <button class={this.classNames} id={this.btnId}>
            <kp-spiner></kp-spiner>
          </button>
        </Host>
      );
    } else {
      return (
        <Host>
          <button class={this.classNames} id={this.btnId}>{this.text}</button>
        </Host>
      );
    }
  }
}
