import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'kp-label',
  styleUrl: 'kp-label.scss'
})
export class KpLabel {

  // Default props
  @Prop() labelText: string;
  @Prop() labelFor: string;

  // State props
  @Prop() isError: boolean = false;

  render() {
    return (
      <Host class={{ 'kp-label': true, 'isError': this.isError}}>
        <label htmlFor={this.labelFor} class={{ 'kp-label__text': true }}>{this.labelText}</label>
      </Host>
    );
  }

}
