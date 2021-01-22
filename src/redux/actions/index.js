import * as types from "../types"

export const setInputSearch = (inputData) => ({
  type: types.SET_INPUT_SEARCH,
  payload: {
    inputData,
  },
});

export const setClickedPokemon = (pokemonNumber) => ({
  type: types.SET_CLICKED_POKEMON,
  payload: {
    pokemonNumber,
  },
});
