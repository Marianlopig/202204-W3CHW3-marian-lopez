/* eslint-disable no-new */
import Component from "./Component.js";
import PokemonComponent from "./PokemonComponent.js";
import NavBarComponent from "./NavBarComponent.js";

class MyPokemonsMainComponent extends Component {
  constructor(parentElement) {
    super("div", "main-container", parentElement);
    this.render();
  }

  render() {
    this.element.innerHTML = "";
    new NavBarComponent(this.element);

    (async () => {
      const localApiResponse = await fetch(
        "https://pokemon-marian.herokuapp.com/pokemon"
      );
      const pokemonDetails = await localApiResponse.json();
      pokemonDetails.forEach((pokemon) => {
        new PokemonComponent(this.element, pokemon, "delete", () =>
          this.onCardDelete()
        );
      });
    })();
  }

  onCardDelete() {
    this.render();
  }
}

export default MyPokemonsMainComponent;
