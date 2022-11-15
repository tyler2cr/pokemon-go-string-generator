import {PokemonType} from "./pokemon-type";

export interface TypeEffectiveness {
  type: PokemonType,
  weaknesses: PokemonType[],
  resistances: PokemonType[]
}

export const TypeEffectivenessChart: TypeEffectiveness[] = [
  {
    type: PokemonType.FIRE,
    weaknesses: [PokemonType.WATER, PokemonType.ROCK, PokemonType.GROUND],
    resistances: [PokemonType.BUG, PokemonType.FAIRY, PokemonType.FIRE, PokemonType.ICE, PokemonType.STEEL]
  }
]
