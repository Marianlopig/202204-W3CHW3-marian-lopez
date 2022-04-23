/* eslint-disable no-new */
import Component from "./Component.js";
import NavBarComponent from "./NavBarComponent.js";
import PokemonComponent from "./PokemonComponent.js";

class MainContainerComponent extends Component {
  constructor(parentElement) {
    super("div", "main-container", parentElement);
    const urlApi = "https://pokeapi.co/api/v2/pokemon";

    this.render(urlApi);
  }

  render(pokemonsUrl) {
    this.element.innerHTML = `<h1>Pokemon List</h1>
      <ul class="pokemon-list">
      </ul>
      <div class ="pagination"></div>`;
    new NavBarComponent(this.element);

    this.renderPokemons(pokemonsUrl);
  }

  async renderPokemons(pokemonsUrl) {
    const response = await fetch(pokemonsUrl);
    const pokemons = await response.json();
    const parentPokemonCard = this.element.querySelector(".pokemon-list");

    pokemons.results.forEach((pokemon) => {
      const pokemonCard = new PokemonComponent(parentPokemonCard);

      (async () => {
        const pokemonDetailsResponse = await fetch(pokemon.url);
        const pokemonDetails = await pokemonDetailsResponse.json();
        pokemonCard.firstRender(pokemonDetails);
      })();
    });

    const pagination = this.element.querySelector(".pagination");
    pagination.innerHTML = `
      <button class="button-pre">Previous</button>
      <span>1-20/${pokemons.count}</span>
      <button class="button-next">Next</button>
     `;

    const buttonNext = pagination.querySelector(".button-next");
    buttonNext.addEventListener("click", () => {
      this.render(pokemons.next);
    });
  }
}

export default MainContainerComponent;
