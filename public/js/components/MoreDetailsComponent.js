import Component from "./Component.js";

class MoreDetailsComponent extends Component {
  pokemon;
  constructor(parentElement, pokemon) {
    super("div", "text-container", parentElement);
    this.pokemon = pokemon;
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <h2>Pokemon Profail</h2>
    <ul>
      <li>Abilities:</li>
        <ul>
        ${this.getAbilities()}
        </ul>
      <li>Base Experience: ${this.pokemon.base_experience}</li>
      <li>Height:${this.pokemon.height}</li>
      <li>Weight:${this.pokemon.weight}</li>
    </ul>`;
  }

  getAbilities() {
    let result = "";
    this.pokemon.abilities.forEach((ability) => {
      result += `<li>${ability.ability.name}</li>`;
    });
    return result;
  }
}

export default MoreDetailsComponent;
