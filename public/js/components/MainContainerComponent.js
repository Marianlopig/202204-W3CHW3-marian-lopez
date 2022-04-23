/* eslint-disable no-new */
import Component from "./Component.js";
import PokemonComponent from "./PokemonComponent.js";

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
    <ul class="pokemon-list">
    </ul>
    <button>Previous</button>
    <span>1-20/1123</span>
    <button>Next</button`;

    this.renderPokemons();
  }

  async renderPokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
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
  }
}

export default MainContainerComponent;
