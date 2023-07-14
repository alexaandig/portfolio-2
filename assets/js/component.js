// Define the custom element class
class NavBar extends HTMLElement {
  constructor() {
    super();
    
    // Create a shadow root
    const shadowRoot = this.attachShadow({ mode: 'open' });
    
    // Clone the template content and attach it to the shadow root
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        /* Define component styles here */
        nav {
          background-color: #f2f2f2;
          padding: 10px;
        }

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        li {
          display: inline;
          margin-right: 10px;
        }

        a {
          text-decoration: none;
          color: #333;
          padding: 5px;
        }
      </style>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    `;

    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

// Register the custom element
customElements.define('nav-bar', NavBar);
