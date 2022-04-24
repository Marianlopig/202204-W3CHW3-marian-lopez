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
          <a href=".index.html"><li>Home</li></a>
          <a href="./index.html"<li><img src="images/pokemon-logo.svg" alt="alt" /></li></a>
          <a href="./mypokemons.html"><li>My Pokemons</li></a>
        </ul>
      </nav>`;
  }
}

export default NavBarComponent;
