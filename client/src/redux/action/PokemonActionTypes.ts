import {
  POKEMON_FAIL,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
  REQUEST_POKEMON,
} from "./PokemonAction";

export type PokemonType = {
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  stats: PokemonStats[];
};

export type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
};
export type PokemonSprites = {
  front_default: string;
};
export type PokemonStats = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export interface PokemonLoading {
  type: typeof POKEMON_LOADING;
}
export interface PokemonFail {
  type: typeof POKEMON_FAIL;
}
export interface PokemonSuccess {
  type: typeof POKEMON_SUCCESS;
  payload: PokemonType;
}
export interface RequestPokemon {
  type: typeof REQUEST_POKEMON;
}

export type PokemonDispatchTypes =
  | PokemonLoading
  | PokemonFail
  | PokemonSuccess;
