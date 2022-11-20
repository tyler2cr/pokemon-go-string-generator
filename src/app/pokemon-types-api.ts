import {Type} from "./type";

export interface PokemonTypesApi {
  form: string,
  pokemon_id: number,
  pokemon_name: string,
  type: Type[]
}
