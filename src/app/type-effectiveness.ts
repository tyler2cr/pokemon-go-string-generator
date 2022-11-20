import {PokemonType} from "./pokemon-type";

export interface TypeEffectiveness {
  type: PokemonType,
  vulnerableTo: PokemonType[],
  resistantTo: PokemonType[]
}

export const TypeEffectivenessChart: TypeEffectiveness[] = [
  {
    type: PokemonType.Fire,
    vulnerableTo: [PokemonType.Water, PokemonType.Rock, PokemonType.Ground],
    resistantTo: [PokemonType.Bug, PokemonType.Fairy, PokemonType.Fire, PokemonType.Ice, PokemonType.Steel]
  },
  {
    type: PokemonType.Grass,
    vulnerableTo: [PokemonType.Flying, PokemonType.Poison, PokemonType.Bug, PokemonType.Fire, PokemonType.Ice],
    resistantTo: [PokemonType.Ground, PokemonType.Water, PokemonType.Electric, PokemonType.Grass]
  },
  {
    type: PokemonType.Poison,
    vulnerableTo: [PokemonType.Ghost, PokemonType.Ground, PokemonType.Poison],
    resistantTo: [PokemonType.Electric, PokemonType.Grass, PokemonType.Ground, PokemonType.Water]
  }
]
