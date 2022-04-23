import Component from "./Component.js";

class MainContainerComponent extends Component {
  constructor(parentElement) {
    super("div", "main-container", parentElement);
    this.render();
  }

  render() {
    this.element.innerHTML = `<h1>Pokemon List</h1>
    <header>
      <nav>
        <ul>
          <li>Home</li>
          <li>My Pokemons</li>
        </ul>
      </nav>
    </header>
    <ul>
      <li>Pokemon Card 1</li>
      <li>Pokemon Card 2</li>
      <li>Pokemon Card 3</li>
    </ul>
    <button>Previous</button>
    <span>1-20/1123</span>
    <button>Next</button`;
  }
}

export default MainContainerComponent;
