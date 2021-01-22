import * as types from "../types";

const initialState = {
  pokemonClicked: undefined,
  myPokemons: []
};

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CLICKED_POKEMON:
      return {
        ...state,
        pokemonClicked: action.payload.pokemonNumber,
      };

      case types.SET_MY_POKEMONS:
      return {
        ...state,
        myPokemons: [...state.myPokemons, action.payload.pokemon],
      };

      case types.REMOVE_MY_POKEMON:
      const newPokemons = state.myPokemons.filter(item => item.id !== action.payload.pokemon.id)
      return {
        ...state,
        myPokemons: newPokemons
      };

    default:
      return state;
  }
};

export default pokemons;
