import Component from "./Component.js";

class PokemonComponent extends Component {
  pokemon;
  constructor(parentElement, pokemon) {
    super("div", "pokeCard", parentElement);
    this.pokemon = pokemon;
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <h2>Pokemon Name</h2>
    <img src="../images/pokeball.png" alt="alt" />
    <p>#001<p>
    <h3>Type</h3>
    <ul>
    <li>type 1</li>
    <li>type 2</li>
    </ul>
    <button>Save</button>
    <button>Details</button>
    `;
  }
}

export default PokemonComponent;
