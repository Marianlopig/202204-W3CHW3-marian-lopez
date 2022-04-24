import Component from "./Component.js";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const getDetailComponent = (title, detail) => `
    <div class="detail-list__atribute">
        <h4>${title}</h4>
        <p>${detail}</p>
    </div>`;

class MoreDetailsComponent extends Component {
  pokemon;
  constructor(parentElement, pokemon) {
    super("div", "poke-details", parentElement);
    this.pokemon = pokemon;
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <div class="img-container img-container__details">
    <div class="img-inner">
      <div class="inner-skew">
        <img src="${
          this.pokemon.sprites.other["official-artwork"].front_default
        }" alt="alt" />
      </div>
    </div>
  </div>
  <div class="poke-details__text">
    <h2> #${this.pokemon.id} ${capitalize(this.pokemon.name)}</h2>
    <div class="detail-list">
        ${getDetailComponent("Type", this.getTypes())}
        ${getDetailComponent("Abilities", this.getAbilities())}
        ${getDetailComponent(
          "Base Experience",
          this.pokemon.base_experience
        )}      
        ${getDetailComponent("Height", this.pokemon.height)}      
        ${getDetailComponent("Weight", this.pokemon.weight)}      
    </div>
  </div>
    `;
  }

  getAbilities() {
    let result = "";
    this.pokemon.abilities.forEach((ability) => {
      result += `<li contentEditable="true" class="editable-text">${ability.ability.name}</li>`;
    });
    return result;
  }

  getTypes() {
    let result = "";
    this.pokemon.types.forEach((type) => {
      result += `<li>${type.type.name}</li>`;
    });
    return result;
  }
}

export default MoreDetailsComponent;
