/* eslint-disable no-new */
import Component from "./Component.js";
import PokemonComponent from "./PokemonComponent.js";

class MyPokemonsMainComponent extends Component {
  constructor(parentElement) {
    super("div", "main-container", parentElement);
    this.render();
  }

  render() {
    (async () => {
      const localApiResponse = await fetch(
        "https://pokemon-marian.herokuapp.com/pokemon"
      );
      const pokemonDetails = await localApiResponse.json();
      pokemonDetails.forEach((pokemon) => {
        new PokemonComponent(this.element, pokemon);
      });
    })();
  }
}

export default MyPokemonsMainComponent;

// pokemons.results.forEach((pokemon) => {
//   const pokemonCard = new PokemonComponent(parentPokemonCard);

//   (async () => {
//     const pokemonDetailsResponse = await fetch(pokemon.url);
//     const pokemonDetails = await pokemonDetailsResponse.json();
//     pokemonCard.firstRender(pokemonDetails);
//   })();
// });
