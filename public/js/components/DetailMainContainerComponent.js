/* eslint-disable no-new */
import Component from "./Component.js";
import MoreDetailsComponent from "./MoreDetailsComponent.js";
import NavBarComponent from "./NavBarComponent.js";
import PokemonComponent from "./PokemonComponent.js";

class DetailMainContainerComponent extends Component {
  pokemonId;
  constructor(parentElement, pokemonId) {
    super("div", "main-container", parentElement);
    this.pokemonId = pokemonId;
    this.render();
  }

  render() {
    new NavBarComponent(this.element);
    (async () => {
      const pokemonDetailsResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${this.pokemonId}/`
      );
      const pokemonDetails = await pokemonDetailsResponse.json();
      new PokemonComponent(this.element, pokemonDetails);
      new MoreDetailsComponent(this.element, pokemonDetails);
    })();
  }
}

export default DetailMainContainerComponent;
