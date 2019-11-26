import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'kp-fab',
  styleUrl: 'kp-fab.scss'
})
export class KpFab {

  @Prop() dataIconName:string;
  @Prop() isDisabled:boolean = false;
  @Prop() isLoading:boolean = false;

  //Button class names
  private buttonClassNames = {
    'kp-fab__btn': true,
    'kp-fab__btn--disabled': this.isDisabled,
    'kp-fab__btn--loading': this.isLoading
  }

  // Get icon class names by dataIconName
  private iconClassGenerate(dataIconName:string) {

    if(dataIconName != null && dataIconName != undefined && dataIconName != '') {
      let iconClassName:string = dataIconName;
      return 'kp-fab__icon kp-fab__icon--' + iconClassName;
    }
        
  }

  // Remove white spaces from string
  private removeWhiteSpacesClass(string:string) {
    return string.replace(/\s/g, "");
  }

  render() {
    if(this.isLoading) {
      return (
        <Host class={{ 'kp-fab':true }}>
          <button class={this.buttonClassNames}>
            <kp-spiner></kp-spiner>
          </button>
        </Host>
      );
    } else {
      return (
        <Host class={{ 'kp-fab':true }}>
          <button class={this.buttonClassNames}>
            <icon class={this.iconClassGenerate(this.removeWhiteSpacesClass(this.dataIconName))}></icon>
          </button>
        </Host>
      );
    }
  }
}
