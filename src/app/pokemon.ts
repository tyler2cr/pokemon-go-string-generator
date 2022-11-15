import {PokemonType} from "./pokemon-type";

export interface Pokemon {
  name: string,
  types: PokemonType[]
  pokedexNumber: number
}
