import { LitElement, html, customElement, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './GftSearchComponent-styles.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<gft-search-component></gft-search-component>
```

##styling-doc

@customElement gft-search-component
*/
export class GftSearchComponent extends LitElement {
  static get is() {
    return 'gft-search-component';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
      active: { type: Boolean},
      textoinput: { type: String},
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
    this.active = true;
    this.textoinput = "";

  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('gft-search-component-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
      <slot></slot>
      <p>Welcome to ${this.name}</p>
      <br>
      <input type="text" placeholder="Buscar" @input="${this._search}" value="${this.textoinput}">
      <button ?disabled="${this.active}" @click="${this._handlerClick}">Buscar</button>
      
    `;
  }

  _handlerClick(evento){
    console.log("presionaste el boton y el detail seria: ", this.textoinput );
      this.dispatchEvent(new CustomEvent('gft-search-component-search-click',{
        composed: true,
        bubbles: true,
        detail: this.textoinput
      }))


  }

  _search(evento){
    console.log("Dentro del input", evento.target.value);
    evento.target.value!="" ? this.active=false : this.active=true  
    this.textoinput = evento.target.value; 
  }

}
