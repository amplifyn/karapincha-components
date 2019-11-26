import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'kp-input-field',
  styleUrl: 'kp-input-field.scss'
})
export class KpInputField {

  // Default props
  @Prop() fieldType: string;
  @Prop() placeholderText: string = 'This is default placeholder';
  @Prop() fieldName: string;
  @Prop() fieldId: string;

  // State props
  @Prop() isError: boolean = false;

  render() {
    return (
      <Host>
        <input type={this.fieldType} placeholder={this.placeholderText} name={this.fieldName} id={this.fieldId} class={{ 'kp-input-field': true, 'isError': this.isError }}/>
      </Host>
    );
  }

}
