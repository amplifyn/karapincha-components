import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'kp-spiner',
  styleUrl: 'kp-spiner.scss'
})
export class KpSpiner {

  render() {
    return (
      <Host>
        <div class={{ 'kp-spiner':true }}>
          <div class={{ 'kp-spiner__element':true }}></div>
          <div class={{ 'kp-spiner__element':true }}></div>
          <div class={{ 'kp-spiner__element':true }}></div>
          <div class={{ 'kp-spiner__element':true }}></div>
        </div>
      </Host>
    );
  }
  
}
