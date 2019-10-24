import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'kp-avatar-group',
  styleUrl: 'kp-avatar-group.scss'
})
export class KpAvatarGroup {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
