import { Component, h } from '@stencil/core';
import '@deckdeckgo/highlight-code';

@Component({
  tag: 'kp-code',
  styleUrl: 'kp-code.scss'
})
export class KpCode {



  render() {
    return (
      <div>
        <deckgo-highlight-code language="css">
          <code slot="code">{`
:root {
  --color-fuck: #000;
}
          `}</code>
        </deckgo-highlight-code>
      </div>
    );
  }
}
