import Component from "./Component.js";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
class PokemonComponent extends Component {
  pokemon;
  constructor(parentElement, pokemon) {
    super("li", "pokecard", parentElement);
    if (pokemon) {
      this.firstRender(pokemon);
    }
  }

  firstRender(pokemon) {
    this.pokemon = pokemon;
    this.render();
  }

  render() {
    this.element.innerHTML = `
  <div class="img-container">
    <div class="img-inner">
      <div class="inner-skew">
        <img src="${
          this.pokemon.sprites.other["official-artwork"].front_default
        }" alt="alt" />
      </div>
    </div>
  </div>
  <div class="text-container">
    <h2> #${this.pokemon.id} ${capitalize(this.pokemon.name)}</h2>
    <div class= "types-container">
      <h3>Type</h3>
      <ul class ="text-container--types">
      ${this.getTypes()}
      </ul>
    </div>
    <div class="pokemon-actions">
      <a href="../../details?id=${
        this.pokemon.id
      }"><input type="image" class="icon-detail-button" src="images/details.png" height ="50" alt="icono pokedex"></a>
      <input type="image" class="icon-save-button" src="images/saveicon.png" height ="50" alt="icono pokeball">
    </div> 
  </div>
    `;

    this.addEventListeners();
  }

  getTypes() {
    let result = "";
    this.pokemon.types.forEach((type) => {
      result += `<li>${type.type.name}</li>`;
    });
    return result;
  }

  addEventListeners() {
    const saveButton = this.element.querySelector(".icon-save-button");
    saveButton.addEventListener("click", () => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.pokemon),
      };

      fetch("https://pokemon-marian.herokuapp.com/pokemon", requestOptions);
    });
  }
}

export default PokemonComponent;
