import { Component, h, Host, Prop } from '@stencil/core';
import '@deckdeckgo/highlight-code';

@Component({
  tag: 'kp-color-palette',
  styleUrl: 'kp-color-palette.scss'
})
export class KpColorPalette {
  @Prop() colors: any;

  componentDidLoad() {
    this.colors = [
      {
        hex: '#f3f4f6',
        name: 'Sample Color ⚠️',
        rgb: 'rgb(243, 244, 246)',
        weight: 'SC500'
      },
      {
        hex: '#000000',
        name: 'Black ⚠️',
        rgb: 'rgb(0, 0, 0)',
        weight: 'B500'
      },
      {
        hex: '#ffffff',
        name: 'White ⚠️',
        rgb: 'rgb(255, 255, 255)',
        weight: 'W500'
      }
    ]
  }

  render() {
    return (
      <Host class={{ "kp-color-palette": true }}>
        <section class={{ "kp-color-palette__ribbons": true }}>
          {this.colors.map(color => <kp-color-ribbon color-hex={color.hex} color-name={color.name} color-rgb={color.rgb} color-weight={color.weight}></kp-color-ribbon>)}
        </section>

        <section class={{ "kp-color-palette__code": true }}>
          <pre class={{ 'kp-color-generator__code': true }}>
            <code class={{ 'language-css': true }}>
              {(<span class={{ 'selector': true }}>:root</span>)}
              {(<span class={{ 'punctuation': true }}>{` { \n`}</span>)}
              {(<span class={{ 'comment': true }}>{`  // \n`}</span>)}
              {this.colors.map((color) => {
                return ([
                  <span class="property">{`  --color-${color.weight}`}</span>,
                  <span class={{ 'punctuation': true }}>: </span>,
                  <span class="string">{color.hex}</span>,
                  <span class={{ 'punctuation': true }}>{`;\n`}</span>
                ]);
              })}
              {(<span class={{ 'punctuation': true }}>{`}`}</span>)}
            </code>
          </pre>
        </section>
      </Host>
    );
  }
}
