/* eslint-disable no-new */
import Component from "./Component.js";
import NavBarComponent from "./NavBarComponent.js";
import PokemonComponent from "./PokemonComponent.js";

class MainContainerComponent extends Component {
  constructor(parentElement) {
    super("div", "main-container", parentElement);
    const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

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

    const params = new URLSearchParams(new URL(pokemonsUrl).search);
    const offset = params.get("offset");
    const limit = params.get("limit");

    const from = parseInt(offset, 10) + 1;
    const to = parseInt(offset, 10) + parseInt(limit, 10);

    const pagination = this.element.querySelector(".pagination");

    pagination.innerHTML = `
      <button class="button-pre">Previous</button>
      <span>${from}-${to}/${pokemons.count}</span>
      <button class="button-next">Next</button>
      `;

    const buttonNext = pagination.querySelector(".button-next");
    const buttonPre = pagination.querySelector(".button-pre");
    buttonNext.addEventListener("click", () => {
      if (pokemons.next !== null) {
        this.render(pokemons.next);
      }
    });
    buttonPre.addEventListener("click", () => {
      if (pokemons.previous !== null) {
        this.render(pokemons.previous);
      }
    });
  }
}

export default MainContainerComponent;
