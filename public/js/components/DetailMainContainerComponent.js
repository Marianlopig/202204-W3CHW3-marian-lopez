/* eslint-disable no-new */
import Component from "./Component.js";
import MoreDetailsComponent from "./MoreDetailsComponent.js";
import NavBarComponent from "./NavBarComponent.js";

class DetailMainContainerComponent extends Component {
  pokemonId;
  constructor(parentElement, pokemonId) {
    super("div", "main-container", parentElement);
    this.pokemonId = pokemonId;
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <h1>Pokemon Details</h1>
    <div class="detail-main"></div>`;
    new NavBarComponent(this.element);
    (async () => {
      const pokemonDetailsResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${this.pokemonId}/`
      );
      const pokemonDetails = await pokemonDetailsResponse.json();
      const parentMoreDetail = this.element.querySelector(".detail-main");
      new MoreDetailsComponent(parentMoreDetail, pokemonDetails);
    })();
  }
}

export default DetailMainContainerComponent;
