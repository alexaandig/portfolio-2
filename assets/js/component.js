// Define the custom element class
class NavBar extends HTMLElement {
  constructor() {
    super();
    
    // Create a shadow root
    const shadowRoot = this.attachShadow({ mode: 'open' });
    
    // Load the content of the nav-bar.html file
    fetch('/template-parts/nav-bar.html')
      .then(response => response.text())
      .then(html => {
        const template = document.createElement('template');
        template.innerHTML = html;

        shadowRoot.appendChild(template.content.cloneNode(true));
      });
  }
}

// Register the custom element
customElements.define('nav-bar', NavBar);
