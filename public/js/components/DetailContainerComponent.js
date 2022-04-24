/* eslint-disable no-new */
import Component from "./Component.js";
import PokemonComponent from "./PokemonComponent.js";

class DetailContainerComponent extends Component {
  pokemonId;
  constructor(parentElement, pokemonId) {
    super("div", "main-container", parentElement);
    this.pokemonId = pokemonId;
    this.render();
  }

  render() {
    (async () => {
      const pokemonDetailsResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${this.pokemonId}/`
      );
      const pokemonDetails = await pokemonDetailsResponse.json();
      new PokemonComponent(this.element, pokemonDetails);
    })();
  }
}

export default DetailContainerComponent;
