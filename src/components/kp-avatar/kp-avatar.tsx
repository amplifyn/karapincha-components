import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'kp-avatar',
  styleUrl: 'kp-avatar.scss'
})
export class KpAvatar {
  @Prop() isDefault: boolean = false;
  @Prop() isSmall: boolean = false;
  @Prop() isMedium: boolean = false;
  @Prop() isLarge: boolean = false;
  @Prop() img: string;
  @Prop() alt: string;
  @Prop() name: string;

  private classNames = {
    'kp-avatar': true,
    'is-medium': this.isMedium,
    'is-large': this.isLarge
  }

  private defaultAvatar = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 82"><defs /><path fill="#000" fill-rule="nonzero" d="M20 44c2-1 3-1 4 1a16 16 0 0023 1l1-1c1-1 2-2 4-1 11 4 19 16 19 28v6c0 2-1 3-3 3H4c-2 0-3-1-3-3v-6c0-12 8-24 19-28zM36 1a20 20 0 110 40 20 20 0 010-40z" /></svg>;
  };

  render() {
    if (this.isDefault) {
      return (
        <Host class={this.classNames}>
          {this.defaultAvatar()}
        </Host>
      );
    } else if (this.img !== null && this.img !== undefined && this.img !== '') {
      return (
        <Host class={this.classNames}>
          <img src={this.img} alt={this.alt} />
        </Host>
      );
    } else {
      return (
        <Host class={this.classNames}>
          <slot />
        </Host>
      );
    }
  }
}
