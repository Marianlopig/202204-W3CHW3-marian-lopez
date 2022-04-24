import DetailMainContainerComponent from "./components/DetailMainContainerComponent.js";

/* eslint-disable no-new */

const params = new URLSearchParams(new URL(window.location).search);
const pokemonId = params.get("id");
const parentDetailContainer = document.querySelector(".container");
new DetailMainContainerComponent(parentDetailContainer, pokemonId);
