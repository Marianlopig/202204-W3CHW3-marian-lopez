const getAllPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const pokemons = await response.json();
  return pokemons;
};
(async () => {
  await getAllPokemon();
})();
