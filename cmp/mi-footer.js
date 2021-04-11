class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Axel Ivan Ramirez Huerta
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
