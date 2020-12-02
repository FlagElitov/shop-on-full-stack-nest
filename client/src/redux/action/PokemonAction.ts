import { PokemonType } from "./PokemonActionTypes";
export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_FAIL = "POKEMON_FAIL";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const REQUEST_POKEMON = "REQUEST_POKEMON";

export const pokemonLoading = () => ({ type: POKEMON_LOADING });
export const pokemonFail = () => ({ type: POKEMON_FAIL });
export const pokemonSuccess = (payload: PokemonType) => ({
  type: POKEMON_SUCCESS,
  payload,
});
export const pokemonRequest = (payload: string) => ({
  type: REQUEST_POKEMON,
  payload,
});
