import {PokemonType} from "./pokemon-type";

export interface Weakness {
  type: PokemonType,
  modifier: number
}
