import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'kp-input-group',
  styleUrl: 'kp-input-group.scss',
  shadow: true
})
export class KpInputGroup {

  render() {
    return (
      <Host class={{ 'kp-input-group': true}}>
        <slot></slot>
      </Host>
    );
  }

}
