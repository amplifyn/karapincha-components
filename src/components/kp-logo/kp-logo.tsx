import { Component, Host, h, Element, Prop} from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/dist/declarations/component-interfaces';

@Component({
  tag: 'kp-logo',
  styleUrl: 'kp-logo.scss'
})
export class KpLogo {

  @Element() hostElement: HTMLStencilElement;

  // Default props
  @Prop() imageSrc: string; 
  @Prop() imageAlt: string = 'Default Alt Text';

  // States props
  @Prop() isDefault: boolean = false;
  @Prop() isSmall: boolean = false;
  @Prop() isLarge: boolean = false;

  // Class names
  private classNames = {
    'kp-logo': true,
    'kp-logo--small': this.isSmall,
    'kp-logo--large': this.isLarge
  }

  // Preview default image
  private prevDefaultImg = () => {
    return <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1687 1687"><path d="M0 843.5V1687h1687V0H0v843.5zm1091.6-472.4c52.4 5.1 101.8 27.6 139.2 63.3 7.7 7.4 9.9 9 12.1 8.7 6.6-.8 35.2-8.5 50.7-13.5 28.8-9.4 57.2-21.7 81.8-35.5 7-3.9 13-7 13.3-6.8.2.3-1.2 4.9-3.2 10.2-17.1 45.7-47.7 84.8-87.4 112.1-7.2 5-8.9 6.5-6.6 6 1.7-.3 5-.8 7.5-1.1 31.5-4.3 69.9-14.8 103.9-28.2 9-3.5 16.5-6.2 16.8-5.9.6.6-9.9 15.5-20.4 29.1-23 29.7-56.7 62.8-86.5 85.2l-8.8 6.6v28.1c0 30.7-.9 47.7-4.1 75.1-12.9 113.6-56.9 227.4-124.2 321.8-21.3 29.8-40.1 52-67.2 79.6-40.5 41.2-77.6 70.5-126 99.7-65.6 39.4-142.8 67.8-220.2 80.8-105.7 17.8-210.1 12.6-307.3-15.4-48.2-13.9-96-33.8-139-57.8-17.6-9.8-36.2-21.3-35.6-21.9.3-.3 6 .1 12.8.8 18.3 2 71 1.8 90.8-.4 85.4-9.5 161.6-38.9 230-88.6l10.5-7.6-12.2-1.1c-32.1-3.1-57.9-10.2-84.9-23.4-47.4-23.3-85.1-61.5-107.9-109.5-6.5-13.6-12.2-28.2-11.3-29.1.3-.3 5.7.3 11.9 1.3 23.2 3.5 60.2 2 82.9-3.6 6.8-1.6 7.2-1.9 4.5-2.5-30-7.6-54.3-18.2-77.5-33.7-57.6-38.6-94.5-98.8-102.5-167.7-1.3-11.4-2.1-30.2-1.1-30.2.1 0 5.4 2.4 11.7 5.4 27.7 13.1 54.5 20.3 85.7 23l6.3.6-10.3-7.7c-13.1-9.9-34.2-30.9-43.9-43.8-30.7-40.9-46.2-85-47.6-135.1-.9-30.4 2.4-54.3 11.4-81.6 4.6-14 18.6-44.2 20.2-43.6.5.1 5.2 5.2 10.3 11.3 29.3 34.3 60.3 64 96.8 92.6 98.1 77 218.5 125.3 342 137.3 31.7 3.1 32.3 3.1 31.6.9-.4-1.1-1.3-5.6-2-10-5.4-30.7-4.3-66 2.9-96.3 7.8-32.3 24.6-66.3 45.8-92.5 7.8-9.7 25.6-27.4 35.2-35.1 23.9-19.1 54.8-34.9 84-42.9 27.5-7.5 57.4-10.1 85.1-7.4z"/></svg>;
  };

  render() {
    if (this.isDefault) {
      return (
        <Host class={this.classNames}>
          {this.prevDefaultImg()}
        </Host>
      );
    } else if (this.imageSrc != null && this.imageSrc != undefined && this.imageSrc != '') {
      return (
        <Host>
          <img src={this.imageSrc} alt={this.imageAlt} class={this.classNames}/>
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
