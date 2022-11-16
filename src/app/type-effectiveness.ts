import {PokemonType} from "./pokemon-type";

export interface TypeEffectiveness {
  type: PokemonType,
  vulnerableTo: PokemonType[],
  resistantTo: PokemonType[]
}

export const TypeEffectivenessChart: TypeEffectiveness[] = [
  {
    type: PokemonType.FIRE,
    vulnerableTo: [PokemonType.WATER, PokemonType.ROCK, PokemonType.GROUND],
    resistantTo: [PokemonType.BUG, PokemonType.FAIRY, PokemonType.FIRE, PokemonType.ICE, PokemonType.STEEL]
  },
  {
    type: PokemonType.GRASS,
    vulnerableTo: [PokemonType.FLYING, PokemonType.POISON, PokemonType.BUG, PokemonType.FIRE, PokemonType.ICE],
    resistantTo: [PokemonType.GROUND, PokemonType.WATER, PokemonType.ELECTRIC, PokemonType.GRASS]
  },
  {
    type: PokemonType.POISON,
    vulnerableTo: [PokemonType.GHOST, PokemonType.GROUND, PokemonType.POISON],
    resistantTo: [PokemonType.ELECTRIC, PokemonType.GRASS, PokemonType.GROUND, PokemonType.WATER]
  }
]
