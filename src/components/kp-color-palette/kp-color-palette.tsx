// import { Component, h, Host, Prop, Watch, Element } from '@stencil/core';

// @Component({
//   tag: 'kp-color-palette',
//   styleUrl: 'kp-color-palette.scss'
// })
// export class KpColorPalette {
//   @Prop() colors: any;
//   // @Element() el: HTMLElement;

//   _colors: any[];

//   componentDidLoad() {
//     // this._colors = JSON.parse(this.colors);
//     // console.log(this.el);

//     // var cmp = document.querySelector('kp-color-palette');
//     // console.log(cmp.colors);
//   }

//   render() {
//     return (
//       <Host class={{ "kp-color-palette": true }}>
//         <section class={{ "kp-color-palette__ribbons": true }}>
//           {this.colors.map(color => <kp-color-ribbon color-hex={color.hex} color-name={color.name} color-rgb={color.rgb} color-weight={color.weight}></kp-color-ribbon>)}
//         </section>

//         <section class={{ "kp-color-palette__code": true }}>
//           <pre class={{ 'kp-color-generator__code': true }}>
//             <code class={{ 'language-css': true }}>
//               {(<span class={{ 'selector': true }}>:root</span>)}
//               {(<span class={{ 'punctuation': true }}>{` { \n`}</span>)}
//               {(<span class={{ 'comment': true }}>{`  // \n`}</span>)}
//               {this.colors.map((color) => {
//                 return ([
//                   <span class="property">{`  --color-${color.weight}`}</span>,
//                   <span class={{ 'punctuation': true }}>: </span>,
//                   <span class="string">{color.hex}</span>,
//                   <span class={{ 'punctuation': true }}>{`;\n`}</span>
//                 ]);
//               })}
//               {(<span class={{ 'punctuation': true }}>{`}`}</span>)}
//             </code>
//           </pre>
//         </section>
//       </Host>
//     );
//   }
// }
