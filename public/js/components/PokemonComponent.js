import Component from "./Component.js";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
class PokemonComponent extends Component {
  pokemon;
  buttonAction2;
  buttonAction2Callback;
  constructor(parentElement, pokemon, buttonAction2, buttonAction2Callback) {
    super("li", "pokecard", parentElement);
    this.buttonAction2 = buttonAction2;
    this.buttonAction2Callback = buttonAction2Callback;
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
      ${this.getButtonAction2()}
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

  getButtonAction2() {
    if (this.buttonAction2 && this.buttonAction2 === "delete") {
      return '<input type="image" class="icon-delete-button" src="images/delete.png" height ="50" alt="icono pokeball">';
    }
    return '<input type="image" class="icon-save-button" src="images/saveicon.png" height ="50" alt="icono pokeball">';
  }

  addEventListeners() {
    const saveButton = this.element.querySelector(".icon-save-button");
    if (saveButton) {
      saveButton.addEventListener("click", () => {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.pokemon),
        };

        fetch("https://pokemon-marian.herokuapp.com/pokemon", requestOptions);
      });
    }

    const deleteButton = this.element.querySelector(".icon-delete-button");
    if (deleteButton) {
      deleteButton.addEventListener("click", async () => {
        const requestOptions = {
          method: "DELETE",
        };
        await fetch(
          `https://pokemon-marian.herokuapp.com/pokemon/${this.pokemon.id}`,
          requestOptions
        );
        this.buttonAction2Callback();
      });
    }
  }
}

export default PokemonComponent;
