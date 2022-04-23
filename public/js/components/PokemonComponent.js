import Component from "./Component.js";

class PokemonComponent extends Component {
  pokemon;
  constructor(parentElement) {
    super("li", "pokecard", parentElement);
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
    <h2> #${this.pokemon.id} ${this.pokemon.name}</h2>
    <div class= "types-container">
      <h3>Type</h3>
      <ul class ="text-container--types">
      ${this.getTypes()}
      </ul>
    </div>
    <input type="image" name="Name of image button" src="images/details.png" height ="50" alt="icono pokeball">
    <input type="image" name="Name of image button" src="images/saveicon.png" height ="50" alt="icono pokeball">  
  </div>
    `;
  }

  getTypes() {
    let result = "";
    this.pokemon.types.forEach((type) => {
      result += `<li>${type.type.name}</li>`;
    });
    return result;
  }
}

export default PokemonComponent;
