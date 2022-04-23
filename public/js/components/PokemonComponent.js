import Component from "./Component.js";

class PokemonComponent extends Component {
  pokemon;
  constructor(parentElement, pokemon) {
    super("li", "pokecard", parentElement);
    this.pokemon = pokemon;
    this.render();
  }

  render() {
    this.element.innerHTML = `
  <div class="img-container">
    <div class="img-inner">
      <div class="inner-skew">
        <img src="../images/pokeball.png" alt="alt" />
      </div>
    </div>
  </div>
  <div class="text-container">
    <h2>Pokemon Name #003</h2>
    <div>
      <h3>Type</h3>
      <ul>
      <li>type 1</li>
      <li>type 2</li>
      </ul>
    </div>
    <button>Save</button>
    <button>Details</button>
  </div>
    `;
  }
}

export default PokemonComponent;
