import {PokemonType} from "./pokemon-type";

export interface PokemonFromApi {
  form: string,
  pokemon_id: number,
  pokemon_name: string,
  type: PokemonType[]
}
