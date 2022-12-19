import {Type} from "./type";

export interface TypeEffectiveness {
  type: Type,
  vulnerableTo: Type[],
  resistantTo: Type[]
}

export const TypeEffectivenessChart: TypeEffectiveness[] = [
  {
    type: Type.Normal,
    vulnerableTo: [Type.Fighting],
    resistantTo: [Type.Ghost]
  },
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
  },
  {
    type: Type.Water,
    vulnerableTo: [Type.Grass, Type.Electric],
    resistantTo: [Type.Fire, Type.Water, Type.Ice, Type.Steel]
  },
  {
    type: Type.Electric,
    vulnerableTo: [Type.Ground],
    resistantTo: [Type.Flying, Type.Electric]
  },
  {
    type: Type.Ice,
    vulnerableTo: [Type.Fire, Type.Fighting, Type.Steel],
    resistantTo: [Type.Ice]
  },
  {
    type: Type.Fighting,
    vulnerableTo: [Type.Flying, Type.Psychic],
    resistantTo: [Type.Bug, Type.Rock, Type.Dark]
  },
  {
    type: Type.Ground,
    vulnerableTo: [Type.Water, Type.Grass, Type.Ice],
    resistantTo: [Type.Electric, Type.Poison, Type.Rock]
  },
  {
    type: Type.Flying,
    vulnerableTo: [Type.Electric, Type.Rock, Type.Ice],
    resistantTo: [Type.Grass, Type.Bug, Type.Fighting]
  },
  {
    type: Type.Psychic,
    vulnerableTo: [Type.Bug, Type.Ghost, Type.Dark],
    resistantTo: [Type.Fighting, Type.Psychic]
  },
  {
    type: Type.Bug,
    vulnerableTo: [Type.Flying, Type.Fire, Type.Rock],
    resistantTo: [Type.Grass, Type.Fighting, Type.Ground]
  },
  {
    type: Type.Rock,
    vulnerableTo: [Type.Water, Type.Grass, Type.Ground, Type.Fighting, Type.Steel],
    resistantTo: [Type.Normal, Type.Fire, Type.Poison, Type.Flying]
  },
  {
    type: Type.Ghost,
    vulnerableTo: [Type.Ghost, Type.Dark],
    resistantTo: [Type.Normal, Type.Fighting, Type.Poison, Type.Bug]
  },
  {
    type: Type.Dragon,
    vulnerableTo: [Type.Ice, Type.Dragon, Type.Fairy],
    resistantTo: [Type.Fire, Type.Water, Type.Grass, Type.Electric]
  },
  {
    type: Type.Dark,
    vulnerableTo: [Type.Fighting, Type.Bug, Type.Fairy],
    resistantTo: [Type.Psychic, Type.Ghost, Type.Dark]
  },
  {
    type: Type.Steel,
    vulnerableTo: [Type.Fire, Type.Fighting, Type.Ground],
    resistantTo: [Type.Normal, Type.Grass, Type.Ice, Type.Flying, Type.Psychic, Type.Bug, Type.Rock, Type.Ghost, Type.Dragon, Type.Dark, Type.Steel, Type.Fairy]
  },
  {
    type: Type.Fairy,
    vulnerableTo: [Type.Poison, Type.Steel],
    resistantTo: [Type.Fighting, Type.Bug, Type.Dark, Type.Dragon]
  },
]
