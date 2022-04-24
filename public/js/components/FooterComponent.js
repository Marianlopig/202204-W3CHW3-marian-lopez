import Component from "./Component.js";

class FooterComponent extends Component {
  constructor(parentElement) {
    super("footer", "footer", parentElement);
    this.render();
  }

  render() {
    this.element.textContent = "Marian Lopez 2022";
  }
}

export default FooterComponent;
