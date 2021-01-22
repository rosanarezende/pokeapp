import * as types from "../types";

const initialState = {
  pokemonClicked: undefined,
};

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CLICKED_POKEMON:
      return {
        ...state,
        pokemonClicked: action.payload.pokemonNumber,
      };

    default:
      return state;
  }
};

export default pokemons;
