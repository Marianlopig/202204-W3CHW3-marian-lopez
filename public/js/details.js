import DetailContainerComponent from "./components/DetailContainerComponent.js";

/* eslint-disable no-new */

const params = new URLSearchParams(new URL(window.location).search);
const pokemonId = params.get("id");
const parentDetailContainer = document.querySelector(".container");
new DetailContainerComponent(parentDetailContainer, pokemonId);
