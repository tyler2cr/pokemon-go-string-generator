import {Type} from "./type";

export interface TypeEffectiveness {
  type: Type,
  vulnerableTo: Type[],
  resistantTo: Type[]
}

export const TypeEffectivenessChart: TypeEffectiveness[] = [
  {
    type: Type.Fire,
    vulnerableTo: [Type.Water, Type.Rock, Type.Ground],
    resistantTo: [Type.Bug, Type.Fairy, Type.Fire, Type.Ice, Type.Steel]
  },
  {
    type: Type.Grass,
    vulnerableTo: [Type.Flying, Type.Poison, Type.Bug, Type.Fire, Type.Ice],
    resistantTo: [Type.Ground, Type.Water, Type.Electric, Type.Grass]
  },
  {
    type: Type.Poison,
    vulnerableTo: [Type.Ghost, Type.Ground, Type.Poison],
    resistantTo: [Type.Electric, Type.Grass, Type.Ground, Type.Water]
  }
]
