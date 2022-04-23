import Component from "./Component.js";

class PokemonComponent extends Component {
  constructor(parentElement) {
    super("div", "pokeCard", parentElement);
  }
}

export default PokemonComponent;
