class NavBarComponent {
  element;
  constructor(parentElement) {
    this.element = document.createElement("header");
    this.element.className = "nav-bar";
    parentElement.prepend(this.element);
    this.render();
  }

  render() {
    this.element.innerHTML = `
      <nav>
        <ul>
          <li>Home</li>
          <li><img src="images/pokemon-logo.svg" alt="alt" /></li>
          <li>My Pokemons</li>
        </ul>
      </nav>`;
  }
}

export default NavBarComponent;
