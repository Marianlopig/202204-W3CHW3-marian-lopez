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
      <li>Base Experience:</li>
        <ul>
          <li contentEditable="true">${this.pokemon.base_experience}</li>
        </ul>
      <li>Height:</li>
        <ul>
          <li contentEditable="true">${this.pokemon.height}</li>
        </ul>
      <li>Weight:</li>
        <ul>
          <li contentEditable="true">${this.pokemon.weight}</li>
        </ul>`;
  }

  getAbilities() {
    let result = "";
    this.pokemon.abilities.forEach((ability) => {
      result += `<li contentEditable="true">${ability.ability.name}</li>`;
    });
    return result;
  }
}

export default MoreDetailsComponent;
