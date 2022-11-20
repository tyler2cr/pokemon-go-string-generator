import {Pokemon} from "./pokemon";
import {PokemonType} from "./pokemon-type";
import {Injectable} from "@angular/core";
import {PokemonFromApi} from "./pokemon-from-api";

@Injectable({
  providedIn: 'root'
})
export class Pokedex {

  private _pokemonList: Pokemon[] = [
    {
      name: 'charmander',
      types: [PokemonType.Fire]
    },
    {
      name: 'bulbasaur',
      types: [PokemonType.Grass, PokemonType.Poison]
    }
  ];

  // public findByName(name: string): Pokemon | undefined {
  //   return this._pokemonList.filter(pokemon => pokemon.name.toLowerCase() === name.toLowerCase()).pop();
  // }
  public findByName(name: string): PokemonFromApi | undefined {
    return this._pokemonFromApi.filter(pokemon => pokemon.pokemon_name.toLowerCase() === name.toLowerCase()).pop();
  }

  // public allNames(): string[] {
  //   return this._pokemonList.map(pokemon => pokemon.name);
  // }
  public allNames(): string[] {
    return this._pokemonFromApi.map(pokemon => pokemon.pokemon_name);
  }

  // get pokemon() {
  //   return this._pokemonList
  // }
  get pokemon() {
    return this._pokemonFromApi
  }

  private _pokemonFromApi: PokemonFromApi[] = [
    {
      form:  "Normal",
      pokemon_id: 1,
      "pokemon_name": "Bulbasaur",
      "type": [
         PokemonType.Grass,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 2,
      "pokemon_name": "Ivysaur",
      "type": [
         PokemonType.Grass,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 3,
      "pokemon_name": "Venusaur",
      "type": [
         PokemonType.Grass,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 4,
      "pokemon_name": "Charmander",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 5,
      "pokemon_name": "Charmeleon",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 6,
      "pokemon_name": "Charizard",
      "type": [
         PokemonType.Fire,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 7,
      "pokemon_name": "Squirtle",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 8,
      "pokemon_name": "Wartortle",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 9,
      "pokemon_name": "Blastoise",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 10,
      "pokemon_name": "Caterpie",
      "type": [
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 11,
      "pokemon_name": "Metapod",
      "type": [
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 12,
      "pokemon_name": "Butterfree",
      "type": [
         PokemonType.Bug,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 13,
      "pokemon_name": "Weedle",
      "type": [
         PokemonType.Bug,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 14,
      "pokemon_name": "Kakuna",
      "type": [
         PokemonType.Bug,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 15,
      "pokemon_name": "Beedrill",
      "type": [
         PokemonType.Bug,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 16,
      "pokemon_name": "Pidgey",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 17,
      "pokemon_name": "Pidgeotto",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 18,
      "pokemon_name": "Pidgeot",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 19,
      "pokemon_name": "Rattata",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 20,
      "pokemon_name": "Raticate",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 21,
      "pokemon_name": "Spearow",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 22,
      "pokemon_name": "Fearow",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 23,
      "pokemon_name": "Ekans",
      "type": [
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 24,
      "pokemon_name": "Arbok",
      "type": [
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 25,
      "pokemon_name": "Pikachu",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 26,
      "pokemon_name": "Raichu",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 27,
      "pokemon_name": "Sandshrew",
      "type": [
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 28,
      "pokemon_name": "Sandslash",
      "type": [
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 29,
      "pokemon_name": "Nidoran♀",
      "type": [
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 30,
      "pokemon_name": "Nidorina",
      "type": [
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 31,
      "pokemon_name": "Nidoqueen",
      "type": [
         PokemonType.Poison,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 32,
      "pokemon_name": "Nidoran♂",
      "type": [
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 33,
      "pokemon_name": "Nidorino",
      "type": [
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 34,
      "pokemon_name": "Nidoking",
      "type": [
         PokemonType.Poison,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 35,
      "pokemon_name": "Clefairy",
      "type": [
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 36,
      "pokemon_name": "Clefable",
      "type": [
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 37,
      "pokemon_name": "Vulpix",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 38,
      "pokemon_name": "Ninetales",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 39,
      "pokemon_name": "Jigglypuff",
      "type": [
         PokemonType.Normal,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 40,
      "pokemon_name": "Wigglytuff",
      "type": [
         PokemonType.Normal,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 41,
      "pokemon_name": "Zubat",
      "type": [
         PokemonType.Poison,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 42,
      "pokemon_name": "Golbat",
      "type": [
         PokemonType.Poison,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 43,
      "pokemon_name": "Oddish",
      "type": [
         PokemonType.Grass,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 44,
      "pokemon_name": "Gloom",
      "type": [
         PokemonType.Grass,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 45,
      "pokemon_name": "Vileplume",
      "type": [
         PokemonType.Grass,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 46,
      "pokemon_name": "Paras",
      "type": [
         PokemonType.Bug,
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 47,
      "pokemon_name": "Parasect",
      "type": [
         PokemonType.Bug,
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 48,
      "pokemon_name": "Venonat",
      "type": [
         PokemonType.Bug,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 49,
      "pokemon_name": "Venomoth",
      "type": [
         PokemonType.Bug,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 50,
      "pokemon_name": "Diglett",
      "type": [
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 51,
      "pokemon_name": "Dugtrio",
      "type": [
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 52,
      "pokemon_name": "Meowth",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 53,
      "pokemon_name": "Persian",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 54,
      "pokemon_name": "Psyduck",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 55,
      "pokemon_name": "Golduck",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 56,
      "pokemon_name": "Mankey",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 57,
      "pokemon_name": "Primeape",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 58,
      "pokemon_name": "Growlithe",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 59,
      "pokemon_name": "Arcanine",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 60,
      "pokemon_name": "Poliwag",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 61,
      "pokemon_name": "Poliwhirl",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 62,
      "pokemon_name": "Poliwrath",
      "type": [
         PokemonType.Water,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 63,
      "pokemon_name": "Abra",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 64,
      "pokemon_name": "Kadabra",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 65,
      "pokemon_name": "Alakazam",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 66,
      "pokemon_name": "Machop",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 67,
      "pokemon_name": "Machoke",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 68,
      "pokemon_name": "Machamp",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 69,
      "pokemon_name": "Bellsprout",
      "type": [
         PokemonType.Grass,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 70,
      "pokemon_name": "Weepinbell",
      "type": [
         PokemonType.Grass,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 71,
      "pokemon_name": "Victreebel",
      "type": [
         PokemonType.Grass,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 72,
      "pokemon_name": "Tentacool",
      "type": [
         PokemonType.Water,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 73,
      "pokemon_name": "Tentacruel",
      "type": [
         PokemonType.Water,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 74,
      "pokemon_name": "Geodude",
      "type": [
        PokemonType.Rock,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 75,
      "pokemon_name": "Graveler",
      "type": [
        PokemonType.Rock,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 76,
      "pokemon_name": "Golem",
      "type": [
        PokemonType.Rock,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 77,
      "pokemon_name": "Ponyta",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 78,
      "pokemon_name": "Rapidash",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 79,
      "pokemon_name": "Slowpoke",
      "type": [
         PokemonType.Water,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 80,
      "pokemon_name": "Slowbro",
      "type": [
         PokemonType.Water,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 81,
      "pokemon_name": "Magnemite",
      "type": [
        PokemonType.Electric,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 82,
      "pokemon_name": "Magneton",
      "type": [
        PokemonType.Electric,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 83,
      "pokemon_name": "Farfetch’d",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 84,
      "pokemon_name": "Doduo",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 85,
      "pokemon_name": "Dodrio",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 86,
      "pokemon_name": "Seel",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 87,
      "pokemon_name": "Dewgong",
      "type": [
         PokemonType.Water,
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 88,
      "pokemon_name": "Grimer",
      "type": [
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 89,
      "pokemon_name": "Muk",
      "type": [
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 90,
      "pokemon_name": "Shellder",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 91,
      "pokemon_name": "Cloyster",
      "type": [
         PokemonType.Water,
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 92,
      "pokemon_name": "Gastly",
      "type": [
        PokemonType.Ghost,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 93,
      "pokemon_name": "Haunter",
      "type": [
        PokemonType.Ghost,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 94,
      "pokemon_name": "Gengar",
      "type": [
        PokemonType.Ghost,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 95,
      "pokemon_name": "Onix",
      "type": [
        PokemonType.Rock,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 96,
      "pokemon_name": "Drowzee",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 97,
      "pokemon_name": "Hypno",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 98,
      "pokemon_name": "Krabby",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 99,
      "pokemon_name": "Kingler",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 100,
      "pokemon_name": "Voltorb",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 101,
      "pokemon_name": "Electrode",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 102,
      "pokemon_name": "Exeggcute",
      "type": [
         PokemonType.Grass,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 103,
      "pokemon_name": "Exeggutor",
      "type": [
         PokemonType.Grass,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 104,
      "pokemon_name": "Cubone",
      "type": [
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 105,
      "pokemon_name": "Marowak",
      "type": [
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 106,
      "pokemon_name": "Hitmonlee",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 107,
      "pokemon_name": "Hitmonchan",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 108,
      "pokemon_name": "Lickitung",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 109,
      "pokemon_name": "Koffing",
      "type": [
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 110,
      "pokemon_name": "Weezing",
      "type": [
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 111,
      "pokemon_name": "Rhyhorn",
      "type": [
         PokemonType.Ground,
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 112,
      "pokemon_name": "Rhydon",
      "type": [
         PokemonType.Ground,
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 113,
      "pokemon_name": "Chansey",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 114,
      "pokemon_name": "Tangela",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 115,
      "pokemon_name": "Kangaskhan",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 116,
      "pokemon_name": "Horsea",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 117,
      "pokemon_name": "Seadra",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 118,
      "pokemon_name": "Goldeen",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 119,
      "pokemon_name": "Seaking",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 120,
      "pokemon_name": "Staryu",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 121,
      "pokemon_name": "Starmie",
      "type": [
         PokemonType.Water,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 122,
      "pokemon_name": "Mr. Mime",
      "type": [
         PokemonType.Psychic,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 123,
      "pokemon_name": "Scyther",
      "type": [
         PokemonType.Bug,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 124,
      "pokemon_name": "Jynx",
      "type": [
        PokemonType.Ice,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 125,
      "pokemon_name": "Electabuzz",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 126,
      "pokemon_name": "Magmar",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 127,
      "pokemon_name": "Pinsir",
      "type": [
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 128,
      "pokemon_name": "Tauros",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 129,
      "pokemon_name": "Magikarp",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 130,
      "pokemon_name": "Gyarados",
      "type": [
         PokemonType.Water,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 131,
      "pokemon_name": "Lapras",
      "type": [
         PokemonType.Water,
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 132,
      "pokemon_name": "Ditto",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 133,
      "pokemon_name": "Eevee",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 134,
      "pokemon_name": "Vaporeon",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 135,
      "pokemon_name": "Jolteon",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 136,
      "pokemon_name": "Flareon",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 137,
      "pokemon_name": "Porygon",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 138,
      "pokemon_name": "Omanyte",
      "type": [
        PokemonType.Rock,
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 139,
      "pokemon_name": "Omastar",
      "type": [
        PokemonType.Rock,
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 140,
      "pokemon_name": "Kabuto",
      "type": [
        PokemonType.Rock,
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 141,
      "pokemon_name": "Kabutops",
      "type": [
        PokemonType.Rock,
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 142,
      "pokemon_name": "Aerodactyl",
      "type": [
        PokemonType.Rock,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 143,
      "pokemon_name": "Snorlax",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 144,
      "pokemon_name": "Articuno",
      "type": [
        PokemonType.Ice,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 145,
      "pokemon_name": "Zapdos",
      "type": [
        PokemonType.Electric,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 146,
      "pokemon_name": "Moltres",
      "type": [
         PokemonType.Fire,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 147,
      "pokemon_name": "Dratini",
      "type": [
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 148,
      "pokemon_name": "Dragonair",
      "type": [
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 149,
      "pokemon_name": "Dragonite",
      "type": [
        PokemonType.Dragon,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 150,
      "pokemon_name": "Mewtwo",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 151,
      "pokemon_name": "Mew",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 152,
      "pokemon_name": "Chikorita",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 153,
      "pokemon_name": "Bayleef",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 154,
      "pokemon_name": "Meganium",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 155,
      "pokemon_name": "Cyndaquil",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 156,
      "pokemon_name": "Quilava",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 157,
      "pokemon_name": "Typhlosion",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 158,
      "pokemon_name": "Totodile",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 159,
      "pokemon_name": "Croconaw",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 160,
      "pokemon_name": "Feraligatr",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 161,
      "pokemon_name": "Sentret",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 162,
      "pokemon_name": "Furret",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 163,
      "pokemon_name": "Hoothoot",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 164,
      "pokemon_name": "Noctowl",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 165,
      "pokemon_name": "Ledyba",
      "type": [
         PokemonType.Bug,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 166,
      "pokemon_name": "Ledian",
      "type": [
         PokemonType.Bug,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 167,
      "pokemon_name": "Spinarak",
      "type": [
         PokemonType.Bug,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 168,
      "pokemon_name": "Ariados",
      "type": [
         PokemonType.Bug,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 169,
      "pokemon_name": "Crobat",
      "type": [
         PokemonType.Poison,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 170,
      "pokemon_name": "Chinchou",
      "type": [
         PokemonType.Water,
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 171,
      "pokemon_name": "Lanturn",
      "type": [
         PokemonType.Water,
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 172,
      "pokemon_name": "Pichu",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 173,
      "pokemon_name": "Cleffa",
      "type": [
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 174,
      "pokemon_name": "Igglybuff",
      "type": [
         PokemonType.Normal,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 175,
      "pokemon_name": "Togepi",
      "type": [
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 176,
      "pokemon_name": "Togetic",
      "type": [
        PokemonType.Fairy,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 177,
      "pokemon_name": "Natu",
      "type": [
         PokemonType.Psychic,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 178,
      "pokemon_name": "Xatu",
      "type": [
         PokemonType.Psychic,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 179,
      "pokemon_name": "Mareep",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 180,
      "pokemon_name": "Flaaffy",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 181,
      "pokemon_name": "Ampharos",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 182,
      "pokemon_name": "Bellossom",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 183,
      "pokemon_name": "Marill",
      "type": [
         PokemonType.Water,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 184,
      "pokemon_name": "Azumarill",
      "type": [
         PokemonType.Water,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 185,
      "pokemon_name": "Sudowoodo",
      "type": [
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 186,
      "pokemon_name": "Politoed",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 187,
      "pokemon_name": "Hoppip",
      "type": [
         PokemonType.Grass,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 188,
      "pokemon_name": "Skiploom",
      "type": [
         PokemonType.Grass,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 189,
      "pokemon_name": "Jumpluff",
      "type": [
         PokemonType.Grass,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 190,
      "pokemon_name": "Aipom",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 191,
      "pokemon_name": "Sunkern",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 192,
      "pokemon_name": "Sunflora",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 193,
      "pokemon_name": "Yanma",
      "type": [
         PokemonType.Bug,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 194,
      "pokemon_name": "Wooper",
      "type": [
         PokemonType.Water,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 195,
      "pokemon_name": "Quagsire",
      "type": [
         PokemonType.Water,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 196,
      "pokemon_name": "Espeon",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 197,
      "pokemon_name": "Umbreon",
      "type": [
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 198,
      "pokemon_name": "Murkrow",
      "type": [
        PokemonType.Dark,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 199,
      "pokemon_name": "Slowking",
      "type": [
         PokemonType.Water,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 200,
      "pokemon_name": "Misdreavus",
      "type": [
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 201,
      "pokemon_name": "Unown",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 202,
      "pokemon_name": "Wobbuffet",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 203,
      "pokemon_name": "Girafarig",
      "type": [
         PokemonType.Normal,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 204,
      "pokemon_name": "Pineco",
      "type": [
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 205,
      "pokemon_name": "Forretress",
      "type": [
         PokemonType.Bug,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 206,
      "pokemon_name": "Dunsparce",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 207,
      "pokemon_name": "Gligar",
      "type": [
         PokemonType.Ground,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 208,
      "pokemon_name": "Steelix",
      "type": [
         PokemonType.Steel,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 209,
      "pokemon_name": "Snubbull",
      "type": [
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 210,
      "pokemon_name": "Granbull",
      "type": [
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 211,
      "pokemon_name": "Qwilfish",
      "type": [
         PokemonType.Water,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 212,
      "pokemon_name": "Scizor",
      "type": [
         PokemonType.Bug,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 213,
      "pokemon_name": "Shuckle",
      "type": [
         PokemonType.Bug,
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 214,
      "pokemon_name": "Heracross",
      "type": [
         PokemonType.Bug,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 215,
      "pokemon_name": "Sneasel",
      "type": [
        PokemonType.Dark,
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 216,
      "pokemon_name": "Teddiursa",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 217,
      "pokemon_name": "Ursaring",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 218,
      "pokemon_name": "Slugma",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 219,
      "pokemon_name": "Magcargo",
      "type": [
         PokemonType.Fire,
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 220,
      "pokemon_name": "Swinub",
      "type": [
        PokemonType.Ice,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 221,
      "pokemon_name": "Piloswine",
      "type": [
        PokemonType.Ice,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 222,
      "pokemon_name": "Corsola",
      "type": [
         PokemonType.Water,
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 223,
      "pokemon_name": "Remoraid",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 224,
      "pokemon_name": "Octillery",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 225,
      "pokemon_name": "Delibird",
      "type": [
        PokemonType.Ice,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 226,
      "pokemon_name": "Mantine",
      "type": [
         PokemonType.Water,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 227,
      "pokemon_name": "Skarmory",
      "type": [
         PokemonType.Steel,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 228,
      "pokemon_name": "Houndour",
      "type": [
        PokemonType.Dark,
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 229,
      "pokemon_name": "Houndoom",
      "type": [
        PokemonType.Dark,
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 230,
      "pokemon_name": "Kingdra",
      "type": [
         PokemonType.Water,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 231,
      "pokemon_name": "Phanpy",
      "type": [
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 232,
      "pokemon_name": "Donphan",
      "type": [
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 233,
      "pokemon_name": "Porygon2",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 234,
      "pokemon_name": "Stantler",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 235,
      "pokemon_name": "Smeargle",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 236,
      "pokemon_name": "Tyrogue",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 237,
      "pokemon_name": "Hitmontop",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 238,
      "pokemon_name": "Smoochum",
      "type": [
        PokemonType.Ice,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 239,
      "pokemon_name": "Elekid",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 240,
      "pokemon_name": "Magby",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 241,
      "pokemon_name": "Miltank",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 242,
      "pokemon_name": "Blissey",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 243,
      "pokemon_name": "Raikou",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 244,
      "pokemon_name": "Entei",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 245,
      "pokemon_name": "Suicune",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 246,
      "pokemon_name": "Larvitar",
      "type": [
        PokemonType.Rock,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 247,
      "pokemon_name": "Pupitar",
      "type": [
        PokemonType.Rock,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 248,
      "pokemon_name": "Tyranitar",
      "type": [
        PokemonType.Rock,
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 249,
      "pokemon_name": "Lugia",
      "type": [
         PokemonType.Psychic,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 250,
      "pokemon_name": "Ho-Oh",
      "type": [
         PokemonType.Fire,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 251,
      "pokemon_name": "Celebi",
      "type": [
         PokemonType.Psychic,
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 252,
      "pokemon_name": "Treecko",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 253,
      "pokemon_name": "Grovyle",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 254,
      "pokemon_name": "Sceptile",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 255,
      "pokemon_name": "Torchic",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 256,
      "pokemon_name": "Combusken",
      "type": [
         PokemonType.Fire,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 257,
      "pokemon_name": "Blaziken",
      "type": [
         PokemonType.Fire,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 258,
      "pokemon_name": "Mudkip",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 259,
      "pokemon_name": "Marshtomp",
      "type": [
         PokemonType.Water,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 260,
      "pokemon_name": "Swampert",
      "type": [
         PokemonType.Water,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 261,
      "pokemon_name": "Poochyena",
      "type": [
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 262,
      "pokemon_name": "Mightyena",
      "type": [
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 263,
      "pokemon_name": "Zigzagoon",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 264,
      "pokemon_name": "Linoone",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 265,
      "pokemon_name": "Wurmple",
      "type": [
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 266,
      "pokemon_name": "Silcoon",
      "type": [
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 267,
      "pokemon_name": "Beautifly",
      "type": [
         PokemonType.Bug,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 268,
      "pokemon_name": "Cascoon",
      "type": [
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 269,
      "pokemon_name": "Dustox",
      "type": [
         PokemonType.Bug,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 270,
      "pokemon_name": "Lotad",
      "type": [
         PokemonType.Water,
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 271,
      "pokemon_name": "Lombre",
      "type": [
         PokemonType.Water,
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 272,
      "pokemon_name": "Ludicolo",
      "type": [
         PokemonType.Water,
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 273,
      "pokemon_name": "Seedot",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 274,
      "pokemon_name": "Nuzleaf",
      "type": [
         PokemonType.Grass,
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 275,
      "pokemon_name": "Shiftry",
      "type": [
         PokemonType.Grass,
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 276,
      "pokemon_name": "Taillow",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 277,
      "pokemon_name": "Swellow",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 278,
      "pokemon_name": "Wingull",
      "type": [
         PokemonType.Water,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 279,
      "pokemon_name": "Pelipper",
      "type": [
         PokemonType.Water,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 280,
      "pokemon_name": "Ralts",
      "type": [
         PokemonType.Psychic,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 281,
      "pokemon_name": "Kirlia",
      "type": [
         PokemonType.Psychic,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 282,
      "pokemon_name": "Gardevoir",
      "type": [
         PokemonType.Psychic,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 283,
      "pokemon_name": "Surskit",
      "type": [
         PokemonType.Bug,
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 284,
      "pokemon_name": "Masquerain",
      "type": [
         PokemonType.Bug,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 285,
      "pokemon_name": "Shroomish",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 286,
      "pokemon_name": "Breloom",
      "type": [
         PokemonType.Grass,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 287,
      "pokemon_name": "Slakoth",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 288,
      "pokemon_name": "Vigoroth",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 289,
      "pokemon_name": "Slaking",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 290,
      "pokemon_name": "Nincada",
      "type": [
         PokemonType.Bug,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 291,
      "pokemon_name": "Ninjask",
      "type": [
         PokemonType.Bug,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 292,
      "pokemon_name": "Shedinja",
      "type": [
         PokemonType.Bug,
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 293,
      "pokemon_name": "Whismur",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 294,
      "pokemon_name": "Loudred",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 295,
      "pokemon_name": "Exploud",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 296,
      "pokemon_name": "Makuhita",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 297,
      "pokemon_name": "Hariyama",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 298,
      "pokemon_name": "Azurill",
      "type": [
         PokemonType.Normal,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 299,
      "pokemon_name": "Nosepass",
      "type": [
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 300,
      "pokemon_name": "Skitty",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 301,
      "pokemon_name": "Delcatty",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 302,
      "pokemon_name": "Sableye",
      "type": [
        PokemonType.Dark,
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 303,
      "pokemon_name": "Mawile",
      "type": [
         PokemonType.Steel,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 304,
      "pokemon_name": "Aron",
      "type": [
         PokemonType.Steel,
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 305,
      "pokemon_name": "Lairon",
      "type": [
         PokemonType.Steel,
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 306,
      "pokemon_name": "Aggron",
      "type": [
         PokemonType.Steel,
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 307,
      "pokemon_name": "Meditite",
      "type": [
         PokemonType.Fighting,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 308,
      "pokemon_name": "Medicham",
      "type": [
         PokemonType.Fighting,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 309,
      "pokemon_name": "Electrike",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 310,
      "pokemon_name": "Manectric",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 311,
      "pokemon_name": "Plusle",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 312,
      "pokemon_name": "Minun",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 313,
      "pokemon_name": "Volbeat",
      "type": [
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 314,
      "pokemon_name": "Illumise",
      "type": [
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 315,
      "pokemon_name": "Roselia",
      "type": [
         PokemonType.Grass,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 316,
      "pokemon_name": "Gulpin",
      "type": [
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 317,
      "pokemon_name": "Swalot",
      "type": [
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 318,
      "pokemon_name": "Carvanha",
      "type": [
         PokemonType.Water,
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 319,
      "pokemon_name": "Sharpedo",
      "type": [
         PokemonType.Water,
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 320,
      "pokemon_name": "Wailmer",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 321,
      "pokemon_name": "Wailord",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 322,
      "pokemon_name": "Numel",
      "type": [
         PokemonType.Fire,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 323,
      "pokemon_name": "Camerupt",
      "type": [
         PokemonType.Fire,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 324,
      "pokemon_name": "Torkoal",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 325,
      "pokemon_name": "Spoink",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 326,
      "pokemon_name": "Grumpig",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 327,
      "pokemon_name": "Spinda",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 328,
      "pokemon_name": "Trapinch",
      "type": [
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 329,
      "pokemon_name": "Vibrava",
      "type": [
         PokemonType.Ground,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 330,
      "pokemon_name": "Flygon",
      "type": [
         PokemonType.Ground,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 331,
      "pokemon_name": "Cacnea",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 332,
      "pokemon_name": "Cacturne",
      "type": [
         PokemonType.Grass,
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 333,
      "pokemon_name": "Swablu",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 334,
      "pokemon_name": "Altaria",
      "type": [
        PokemonType.Dragon,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 335,
      "pokemon_name": "Zangoose",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 336,
      "pokemon_name": "Seviper",
      "type": [
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 337,
      "pokemon_name": "Lunatone",
      "type": [
        PokemonType.Rock,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 338,
      "pokemon_name": "Solrock",
      "type": [
        PokemonType.Rock,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 339,
      "pokemon_name": "Barboach",
      "type": [
         PokemonType.Water,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 340,
      "pokemon_name": "Whiscash",
      "type": [
         PokemonType.Water,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 341,
      "pokemon_name": "Corphish",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 342,
      "pokemon_name": "Crawdaunt",
      "type": [
         PokemonType.Water,
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 343,
      "pokemon_name": "Baltoy",
      "type": [
         PokemonType.Ground,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 344,
      "pokemon_name": "Claydol",
      "type": [
         PokemonType.Ground,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 345,
      "pokemon_name": "Lileep",
      "type": [
        PokemonType.Rock,
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 346,
      "pokemon_name": "Cradily",
      "type": [
        PokemonType.Rock,
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 347,
      "pokemon_name": "Anorith",
      "type": [
        PokemonType.Rock,
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 348,
      "pokemon_name": "Armaldo",
      "type": [
        PokemonType.Rock,
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 349,
      "pokemon_name": "Feebas",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 350,
      "pokemon_name": "Milotic",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 351,
      "pokemon_name": "Castform",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 352,
      "pokemon_name": "Kecleon",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 353,
      "pokemon_name": "Shuppet",
      "type": [
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 354,
      "pokemon_name": "Banette",
      "type": [
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 355,
      "pokemon_name": "Duskull",
      "type": [
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 356,
      "pokemon_name": "Dusclops",
      "type": [
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 357,
      "pokemon_name": "Tropius",
      "type": [
         PokemonType.Grass,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 358,
      "pokemon_name": "Chimecho",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 359,
      "pokemon_name": "Absol",
      "type": [
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 360,
      "pokemon_name": "Wynaut",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 361,
      "pokemon_name": "Snorunt",
      "type": [
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 362,
      "pokemon_name": "Glalie",
      "type": [
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 363,
      "pokemon_name": "Spheal",
      "type": [
        PokemonType.Ice,
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 364,
      "pokemon_name": "Sealeo",
      "type": [
        PokemonType.Ice,
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 365,
      "pokemon_name": "Walrein",
      "type": [
        PokemonType.Ice,
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 366,
      "pokemon_name": "Clamperl",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 367,
      "pokemon_name": "Huntail",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 368,
      "pokemon_name": "Gorebyss",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 369,
      "pokemon_name": "Relicanth",
      "type": [
         PokemonType.Water,
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 370,
      "pokemon_name": "Luvdisc",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 371,
      "pokemon_name": "Bagon",
      "type": [
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 372,
      "pokemon_name": "Shelgon",
      "type": [
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 373,
      "pokemon_name": "Salamence",
      "type": [
        PokemonType.Dragon,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 374,
      "pokemon_name": "Beldum",
      "type": [
         PokemonType.Steel,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 375,
      "pokemon_name": "Metang",
      "type": [
         PokemonType.Steel,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 376,
      "pokemon_name": "Metagross",
      "type": [
         PokemonType.Steel,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 377,
      "pokemon_name": "Regirock",
      "type": [
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 378,
      "pokemon_name": "Regice",
      "type": [
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 379,
      "pokemon_name": "Registeel",
      "type": [
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 380,
      "pokemon_name": "Latias",
      "type": [
        PokemonType.Dragon,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 381,
      "pokemon_name": "Latios",
      "type": [
        PokemonType.Dragon,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 382,
      "pokemon_name": "Kyogre",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 383,
      "pokemon_name": "Groudon",
      "type": [
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 384,
      "pokemon_name": "Rayquaza",
      "type": [
        PokemonType.Dragon,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 385,
      "pokemon_name": "Jirachi",
      "type": [
         PokemonType.Steel,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 386,
      "pokemon_name": "Deoxys",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 387,
      "pokemon_name": "Turtwig",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 388,
      "pokemon_name": "Grotle",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 389,
      "pokemon_name": "Torterra",
      "type": [
         PokemonType.Grass,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 390,
      "pokemon_name": "Chimchar",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 391,
      "pokemon_name": "Monferno",
      "type": [
         PokemonType.Fire,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 392,
      "pokemon_name": "Infernape",
      "type": [
         PokemonType.Fire,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 393,
      "pokemon_name": "Piplup",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 394,
      "pokemon_name": "Prinplup",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 395,
      "pokemon_name": "Empoleon",
      "type": [
         PokemonType.Water,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 396,
      "pokemon_name": "Starly",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 397,
      "pokemon_name": "Staravia",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 398,
      "pokemon_name": "Staraptor",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 399,
      "pokemon_name": "Bidoof",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 400,
      "pokemon_name": "Bibarel",
      "type": [
         PokemonType.Normal,
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 401,
      "pokemon_name": "Kricketot",
      "type": [
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 402,
      "pokemon_name": "Kricketune",
      "type": [
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 403,
      "pokemon_name": "Shinx",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 404,
      "pokemon_name": "Luxio",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 405,
      "pokemon_name": "Luxray",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 406,
      "pokemon_name": "Budew",
      "type": [
         PokemonType.Grass,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 407,
      "pokemon_name": "Roserade",
      "type": [
         PokemonType.Grass,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 408,
      "pokemon_name": "Cranidos",
      "type": [
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 409,
      "pokemon_name": "Rampardos",
      "type": [
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 410,
      "pokemon_name": "Shieldon",
      "type": [
        PokemonType.Rock,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 411,
      "pokemon_name": "Bastiodon",
      "type": [
        PokemonType.Rock,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 414,
      "pokemon_name": "Mothim",
      "type": [
         PokemonType.Bug,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 415,
      "pokemon_name": "Combee",
      "type": [
         PokemonType.Bug,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 416,
      "pokemon_name": "Vespiquen",
      "type": [
         PokemonType.Bug,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 417,
      "pokemon_name": "Pachirisu",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 418,
      "pokemon_name": "Buizel",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 419,
      "pokemon_name": "Floatzel",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 420,
      "pokemon_name": "Cherubi",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 424,
      "pokemon_name": "Ambipom",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 425,
      "pokemon_name": "Drifloon",
      "type": [
        PokemonType.Ghost,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 426,
      "pokemon_name": "Drifblim",
      "type": [
        PokemonType.Ghost,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 427,
      "pokemon_name": "Buneary",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 428,
      "pokemon_name": "Lopunny",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 429,
      "pokemon_name": "Mismagius",
      "type": [
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 430,
      "pokemon_name": "Honchkrow",
      "type": [
        PokemonType.Dark,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 431,
      "pokemon_name": "Glameow",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 432,
      "pokemon_name": "Purugly",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 433,
      "pokemon_name": "Chingling",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 434,
      "pokemon_name": "Stunky",
      "type": [
         PokemonType.Poison,
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 435,
      "pokemon_name": "Skuntank",
      "type": [
         PokemonType.Poison,
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 436,
      "pokemon_name": "Bronzor",
      "type": [
         PokemonType.Steel,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 437,
      "pokemon_name": "Bronzong",
      "type": [
         PokemonType.Steel,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 438,
      "pokemon_name": "Bonsly",
      "type": [
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 439,
      "pokemon_name": "Mime Jr.",
      "type": [
         PokemonType.Psychic,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 440,
      "pokemon_name": "Happiny",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 441,
      "pokemon_name": "Chatot",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 442,
      "pokemon_name": "Spiritomb",
      "type": [
        PokemonType.Ghost,
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 443,
      "pokemon_name": "Gible",
      "type": [
        PokemonType.Dragon,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 444,
      "pokemon_name": "Gabite",
      "type": [
        PokemonType.Dragon,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 445,
      "pokemon_name": "Garchomp",
      "type": [
        PokemonType.Dragon,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 446,
      "pokemon_name": "Munchlax",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 447,
      "pokemon_name": "Riolu",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 448,
      "pokemon_name": "Lucario",
      "type": [
         PokemonType.Fighting,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 449,
      "pokemon_name": "Hippopotas",
      "type": [
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 450,
      "pokemon_name": "Hippowdon",
      "type": [
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 451,
      "pokemon_name": "Skorupi",
      "type": [
         PokemonType.Poison,
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 452,
      "pokemon_name": "Drapion",
      "type": [
         PokemonType.Poison,
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 453,
      "pokemon_name": "Croagunk",
      "type": [
         PokemonType.Poison,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 454,
      "pokemon_name": "Toxicroak",
      "type": [
         PokemonType.Poison,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 455,
      "pokemon_name": "Carnivine",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 456,
      "pokemon_name": "Finneon",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 457,
      "pokemon_name": "Lumineon",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 458,
      "pokemon_name": "Mantyke",
      "type": [
         PokemonType.Water,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 459,
      "pokemon_name": "Snover",
      "type": [
         PokemonType.Grass,
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 460,
      "pokemon_name": "Abomasnow",
      "type": [
         PokemonType.Grass,
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 461,
      "pokemon_name": "Weavile",
      "type": [
        PokemonType.Dark,
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 462,
      "pokemon_name": "Magnezone",
      "type": [
        PokemonType.Electric,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 463,
      "pokemon_name": "Lickilicky",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 464,
      "pokemon_name": "Rhyperior",
      "type": [
         PokemonType.Ground,
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 465,
      "pokemon_name": "Tangrowth",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 466,
      "pokemon_name": "Electivire",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 467,
      "pokemon_name": "Magmortar",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 468,
      "pokemon_name": "Togekiss",
      "type": [
        PokemonType.Fairy,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 469,
      "pokemon_name": "Yanmega",
      "type": [
         PokemonType.Bug,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 470,
      "pokemon_name": "Leafeon",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 471,
      "pokemon_name": "Glaceon",
      "type": [
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 472,
      "pokemon_name": "Gliscor",
      "type": [
         PokemonType.Ground,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 473,
      "pokemon_name": "Mamoswine",
      "type": [
        PokemonType.Ice,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 474,
      "pokemon_name": "Porygon-Z",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 475,
      "pokemon_name": "Gallade",
      "type": [
         PokemonType.Psychic,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 476,
      "pokemon_name": "Probopass",
      "type": [
        PokemonType.Rock,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 477,
      "pokemon_name": "Dusknoir",
      "type": [
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 478,
      "pokemon_name": "Froslass",
      "type": [
        PokemonType.Ice,
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 479,
      "pokemon_name": "Rotom",
      "type": [
        PokemonType.Electric,
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 480,
      "pokemon_name": "Uxie",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 481,
      "pokemon_name": "Mesprit",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 482,
      "pokemon_name": "Azelf",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 483,
      "pokemon_name": "Dialga",
      "type": [
         PokemonType.Steel,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 484,
      "pokemon_name": "Palkia",
      "type": [
         PokemonType.Water,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 485,
      "pokemon_name": "Heatran",
      "type": [
         PokemonType.Fire,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 486,
      "pokemon_name": "Regigigas",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 488,
      "pokemon_name": "Cresselia",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 489,
      "pokemon_name": "Phione",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 490,
      "pokemon_name": "Manaphy",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 491,
      "pokemon_name": "Darkrai",
      "type": [
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 493,
      "pokemon_name": "Arceus",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 494,
      "pokemon_name": "Victini",
      "type": [
         PokemonType.Psychic,
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 495,
      "pokemon_name": "Snivy",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 496,
      "pokemon_name": "Servine",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 497,
      "pokemon_name": "Serperior",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 498,
      "pokemon_name": "Tepig",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 499,
      "pokemon_name": "Pignite",
      "type": [
         PokemonType.Fire,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 500,
      "pokemon_name": "Emboar",
      "type": [
         PokemonType.Fire,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 501,
      "pokemon_name": "Oshawott",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 502,
      "pokemon_name": "Dewott",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 503,
      "pokemon_name": "Samurott",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 504,
      "pokemon_name": "Patrat",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 505,
      "pokemon_name": "Watchog",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 506,
      "pokemon_name": "Lillipup",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 507,
      "pokemon_name": "Herdier",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 508,
      "pokemon_name": "Stoutland",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 509,
      "pokemon_name": "Purrloin",
      "type": [
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 510,
      "pokemon_name": "Liepard",
      "type": [
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 511,
      "pokemon_name": "Pansage",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 512,
      "pokemon_name": "Simisage",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 513,
      "pokemon_name": "Pansear",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 514,
      "pokemon_name": "Simisear",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 515,
      "pokemon_name": "Panpour",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 516,
      "pokemon_name": "Simipour",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 517,
      "pokemon_name": "Munna",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 518,
      "pokemon_name": "Musharna",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 519,
      "pokemon_name": "Pidove",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 520,
      "pokemon_name": "Tranquill",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 521,
      "pokemon_name": "Unfezant",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 522,
      "pokemon_name": "Blitzle",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 523,
      "pokemon_name": "Zebstrika",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 524,
      "pokemon_name": "Roggenrola",
      "type": [
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 525,
      "pokemon_name": "Boldore",
      "type": [
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 526,
      "pokemon_name": "Gigalith",
      "type": [
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 527,
      "pokemon_name": "Woobat",
      "type": [
         PokemonType.Psychic,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 528,
      "pokemon_name": "Swoobat",
      "type": [
         PokemonType.Psychic,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 529,
      "pokemon_name": "Drilbur",
      "type": [
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 530,
      "pokemon_name": "Excadrill",
      "type": [
         PokemonType.Ground,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 531,
      "pokemon_name": "Audino",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 532,
      "pokemon_name": "Timburr",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 533,
      "pokemon_name": "Gurdurr",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 534,
      "pokemon_name": "Conkeldurr",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 535,
      "pokemon_name": "Tympole",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 536,
      "pokemon_name": "Palpitoad",
      "type": [
         PokemonType.Water,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 537,
      "pokemon_name": "Seismitoad",
      "type": [
         PokemonType.Water,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 538,
      "pokemon_name": "Throh",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 539,
      "pokemon_name": "Sawk",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 540,
      "pokemon_name": "Sewaddle",
      "type": [
         PokemonType.Bug,
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 541,
      "pokemon_name": "Swadloon",
      "type": [
         PokemonType.Bug,
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 542,
      "pokemon_name": "Leavanny",
      "type": [
         PokemonType.Bug,
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 543,
      "pokemon_name": "Venipede",
      "type": [
         PokemonType.Bug,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 544,
      "pokemon_name": "Whirlipede",
      "type": [
         PokemonType.Bug,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 545,
      "pokemon_name": "Scolipede",
      "type": [
         PokemonType.Bug,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 546,
      "pokemon_name": "Cottonee",
      "type": [
         PokemonType.Grass,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 547,
      "pokemon_name": "Whimsicott",
      "type": [
         PokemonType.Grass,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 548,
      "pokemon_name": "Petilil",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 549,
      "pokemon_name": "Lilligant",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 551,
      "pokemon_name": "Sandile",
      "type": [
         PokemonType.Ground,
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 552,
      "pokemon_name": "Krokorok",
      "type": [
         PokemonType.Ground,
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 553,
      "pokemon_name": "Krookodile",
      "type": [
         PokemonType.Ground,
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 554,
      "pokemon_name": "Darumaka",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 556,
      "pokemon_name": "Maractus",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 557,
      "pokemon_name": "Dwebble",
      "type": [
         PokemonType.Bug,
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 558,
      "pokemon_name": "Crustle",
      "type": [
         PokemonType.Bug,
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 559,
      "pokemon_name": "Scraggy",
      "type": [
        PokemonType.Dark,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 560,
      "pokemon_name": "Scrafty",
      "type": [
        PokemonType.Dark,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 561,
      "pokemon_name": "Sigilyph",
      "type": [
         PokemonType.Psychic,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 562,
      "pokemon_name": "Yamask",
      "type": [
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 563,
      "pokemon_name": "Cofagrigus",
      "type": [
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 564,
      "pokemon_name": "Tirtouga",
      "type": [
         PokemonType.Water,
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 565,
      "pokemon_name": "Carracosta",
      "type": [
         PokemonType.Water,
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 566,
      "pokemon_name": "Archen",
      "type": [
        PokemonType.Rock,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 567,
      "pokemon_name": "Archeops",
      "type": [
        PokemonType.Rock,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 568,
      "pokemon_name": "Trubbish",
      "type": [
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 569,
      "pokemon_name": "Garbodor",
      "type": [
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 570,
      "pokemon_name": "Zorua",
      "type": [
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 571,
      "pokemon_name": "Zoroark",
      "type": [
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 572,
      "pokemon_name": "Minccino",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 573,
      "pokemon_name": "Cinccino",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 574,
      "pokemon_name": "Gothita",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 575,
      "pokemon_name": "Gothorita",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 576,
      "pokemon_name": "Gothitelle",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 577,
      "pokemon_name": "Solosis",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 578,
      "pokemon_name": "Duosion",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 579,
      "pokemon_name": "Reuniclus",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 580,
      "pokemon_name": "Ducklett",
      "type": [
         PokemonType.Water,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 581,
      "pokemon_name": "Swanna",
      "type": [
         PokemonType.Water,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 582,
      "pokemon_name": "Vanillite",
      "type": [
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 583,
      "pokemon_name": "Vanillish",
      "type": [
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 584,
      "pokemon_name": "Vanilluxe",
      "type": [
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 587,
      "pokemon_name": "Emolga",
      "type": [
        PokemonType.Electric,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 588,
      "pokemon_name": "Karrablast",
      "type": [
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 589,
      "pokemon_name": "Escavalier",
      "type": [
         PokemonType.Bug,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 590,
      "pokemon_name": "Foongus",
      "type": [
         PokemonType.Grass,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 591,
      "pokemon_name": "Amoonguss",
      "type": [
         PokemonType.Grass,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 592,
      "pokemon_name": "Frillish",
      "type": [
         PokemonType.Water,
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 593,
      "pokemon_name": "Jellicent",
      "type": [
         PokemonType.Water,
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 594,
      "pokemon_name": "Alomomola",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 595,
      "pokemon_name": "Joltik",
      "type": [
         PokemonType.Bug,
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 596,
      "pokemon_name": "Galvantula",
      "type": [
         PokemonType.Bug,
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 597,
      "pokemon_name": "Ferroseed",
      "type": [
         PokemonType.Grass,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 598,
      "pokemon_name": "Ferrothorn",
      "type": [
         PokemonType.Grass,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 599,
      "pokemon_name": "Klink",
      "type": [
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 600,
      "pokemon_name": "Klang",
      "type": [
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 601,
      "pokemon_name": "Klinklang",
      "type": [
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 602,
      "pokemon_name": "Tynamo",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 603,
      "pokemon_name": "Eelektrik",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 604,
      "pokemon_name": "Eelektross",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 605,
      "pokemon_name": "Elgyem",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 606,
      "pokemon_name": "Beheeyem",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 607,
      "pokemon_name": "Litwick",
      "type": [
        PokemonType.Ghost,
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 608,
      "pokemon_name": "Lampent",
      "type": [
        PokemonType.Ghost,
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 609,
      "pokemon_name": "Chandelure",
      "type": [
        PokemonType.Ghost,
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 610,
      "pokemon_name": "Axew",
      "type": [
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 611,
      "pokemon_name": "Fraxure",
      "type": [
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 612,
      "pokemon_name": "Haxorus",
      "type": [
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 613,
      "pokemon_name": "Cubchoo",
      "type": [
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 614,
      "pokemon_name": "Beartic",
      "type": [
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 615,
      "pokemon_name": "Cryogonal",
      "type": [
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 616,
      "pokemon_name": "Shelmet",
      "type": [
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 617,
      "pokemon_name": "Accelgor",
      "type": [
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 618,
      "pokemon_name": "Stunfisk",
      "type": [
         PokemonType.Ground,
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 619,
      "pokemon_name": "Mienfoo",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 620,
      "pokemon_name": "Mienshao",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 621,
      "pokemon_name": "Druddigon",
      "type": [
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 622,
      "pokemon_name": "Golett",
      "type": [
         PokemonType.Ground,
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 623,
      "pokemon_name": "Golurk",
      "type": [
         PokemonType.Ground,
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 624,
      "pokemon_name": "Pawniard",
      "type": [
        PokemonType.Dark,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 625,
      "pokemon_name": "Bisharp",
      "type": [
        PokemonType.Dark,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 626,
      "pokemon_name": "Bouffalant",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 627,
      "pokemon_name": "Rufflet",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 628,
      "pokemon_name": "Braviary",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 629,
      "pokemon_name": "Vullaby",
      "type": [
        PokemonType.Dark,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 630,
      "pokemon_name": "Mandibuzz",
      "type": [
        PokemonType.Dark,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 631,
      "pokemon_name": "Heatmor",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 632,
      "pokemon_name": "Durant",
      "type": [
         PokemonType.Bug,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 633,
      "pokemon_name": "Deino",
      "type": [
        PokemonType.Dark,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 634,
      "pokemon_name": "Zweilous",
      "type": [
        PokemonType.Dark,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 635,
      "pokemon_name": "Hydreigon",
      "type": [
        PokemonType.Dark,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 636,
      "pokemon_name": "Larvesta",
      "type": [
         PokemonType.Bug,
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 637,
      "pokemon_name": "Volcarona",
      "type": [
         PokemonType.Bug,
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 638,
      "pokemon_name": "Cobalion",
      "type": [
         PokemonType.Steel,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 639,
      "pokemon_name": "Terrakion",
      "type": [
        PokemonType.Rock,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 640,
      "pokemon_name": "Virizion",
      "type": [
         PokemonType.Grass,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 643,
      "pokemon_name": "Reshiram",
      "type": [
        PokemonType.Dragon,
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 644,
      "pokemon_name": "Zekrom",
      "type": [
        PokemonType.Dragon,
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 646,
      "pokemon_name": "Kyurem",
      "type": [
        PokemonType.Dragon,
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 649,
      "pokemon_name": "Genesect",
      "type": [
         PokemonType.Bug,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 650,
      "pokemon_name": "Chespin",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 651,
      "pokemon_name": "Quilladin",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 652,
      "pokemon_name": "Chesnaught",
      "type": [
         PokemonType.Grass,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 653,
      "pokemon_name": "Fennekin",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 654,
      "pokemon_name": "Braixen",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 655,
      "pokemon_name": "Delphox",
      "type": [
         PokemonType.Fire,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 656,
      "pokemon_name": "Froakie",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 657,
      "pokemon_name": "Frogadier",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 658,
      "pokemon_name": "Greninja",
      "type": [
         PokemonType.Water,
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 659,
      "pokemon_name": "Bunnelby",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 660,
      "pokemon_name": "Diggersby",
      "type": [
         PokemonType.Normal,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 661,
      "pokemon_name": "Fletchling",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 662,
      "pokemon_name": "Fletchinder",
      "type": [
         PokemonType.Fire,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 663,
      "pokemon_name": "Talonflame",
      "type": [
         PokemonType.Fire,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 664,
      "pokemon_name": "Scatterbug",
      "type": [
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 665,
      "pokemon_name": "Spewpa",
      "type": [
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 666,
      "pokemon_name": "Vivillon",
      "type": [
         PokemonType.Bug,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 667,
      "pokemon_name": "Litleo",
      "type": [
         PokemonType.Fire,
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 668,
      "pokemon_name": "Pyroar",
      "type": [
         PokemonType.Fire,
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 672,
      "pokemon_name": "Skiddo",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 673,
      "pokemon_name": "Gogoat",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 674,
      "pokemon_name": "Pancham",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 675,
      "pokemon_name": "Pangoro",
      "type": [
         PokemonType.Fighting,
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 677,
      "pokemon_name": "Espurr",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 678,
      "pokemon_name": "Meowstic",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 679,
      "pokemon_name": "Honedge",
      "type": [
         PokemonType.Steel,
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 680,
      "pokemon_name": "Doublade",
      "type": [
         PokemonType.Steel,
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 681,
      "pokemon_name": "Aegislash",
      "type": [
         PokemonType.Steel,
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 682,
      "pokemon_name": "Spritzee",
      "type": [
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 683,
      "pokemon_name": "Aromatisse",
      "type": [
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 684,
      "pokemon_name": "Swirlix",
      "type": [
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 685,
      "pokemon_name": "Slurpuff",
      "type": [
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 686,
      "pokemon_name": "Inkay",
      "type": [
        PokemonType.Dark,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 687,
      "pokemon_name": "Malamar",
      "type": [
        PokemonType.Dark,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 688,
      "pokemon_name": "Binacle",
      "type": [
        PokemonType.Rock,
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 689,
      "pokemon_name": "Barbaracle",
      "type": [
        PokemonType.Rock,
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 690,
      "pokemon_name": "Skrelp",
      "type": [
         PokemonType.Poison,
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 691,
      "pokemon_name": "Dragalge",
      "type": [
         PokemonType.Poison,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 692,
      "pokemon_name": "Clauncher",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 693,
      "pokemon_name": "Clawitzer",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 694,
      "pokemon_name": "Helioptile",
      "type": [
        PokemonType.Electric,
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 695,
      "pokemon_name": "Heliolisk",
      "type": [
        PokemonType.Electric,
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 696,
      "pokemon_name": "Tyrunt",
      "type": [
        PokemonType.Rock,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 697,
      "pokemon_name": "Tyrantrum",
      "type": [
        PokemonType.Rock,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 698,
      "pokemon_name": "Amaura",
      "type": [
        PokemonType.Rock,
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 699,
      "pokemon_name": "Aurorus",
      "type": [
        PokemonType.Rock,
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 700,
      "pokemon_name": "Sylveon",
      "type": [
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 701,
      "pokemon_name": "Hawlucha",
      "type": [
         PokemonType.Fighting,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 702,
      "pokemon_name": "Dedenne",
      "type": [
        PokemonType.Electric,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 703,
      "pokemon_name": "Carbink",
      "type": [
        PokemonType.Rock,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 704,
      "pokemon_name": "Goomy",
      "type": [
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 705,
      "pokemon_name": "Sliggoo",
      "type": [
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 706,
      "pokemon_name": "Goodra",
      "type": [
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 707,
      "pokemon_name": "Klefki",
      "type": [
         PokemonType.Steel,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 708,
      "pokemon_name": "Phantump",
      "type": [
        PokemonType.Ghost,
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 709,
      "pokemon_name": "Trevenant",
      "type": [
        PokemonType.Ghost,
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 712,
      "pokemon_name": "Bergmite",
      "type": [
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 713,
      "pokemon_name": "Avalugg",
      "type": [
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 714,
      "pokemon_name": "Noibat",
      "type": [
         PokemonType.Flying,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 715,
      "pokemon_name": "Noivern",
      "type": [
         PokemonType.Flying,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 716,
      "pokemon_name": "Xerneas",
      "type": [
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 717,
      "pokemon_name": "Yveltal",
      "type": [
        PokemonType.Dark,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 718,
      "pokemon_name": "Zygarde",
      "type": [
        PokemonType.Dragon,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 719,
      "pokemon_name": "Diancie",
      "type": [
        PokemonType.Rock,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 721,
      "pokemon_name": "Volcanion",
      "type": [
         PokemonType.Fire,
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 722,
      "pokemon_name": "Rowlet",
      "type": [
         PokemonType.Grass,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 723,
      "pokemon_name": "Dartrix",
      "type": [
         PokemonType.Grass,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 724,
      "pokemon_name": "Decidueye",
      "type": [
         PokemonType.Grass,
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 725,
      "pokemon_name": "Litten",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 726,
      "pokemon_name": "Torracat",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 727,
      "pokemon_name": "Incineroar",
      "type": [
         PokemonType.Fire,
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 728,
      "pokemon_name": "Popplio",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 729,
      "pokemon_name": "Brionne",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 730,
      "pokemon_name": "Primarina",
      "type": [
         PokemonType.Water,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 731,
      "pokemon_name": "Pikipek",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 732,
      "pokemon_name": "Trumbeak",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 733,
      "pokemon_name": "Toucannon",
      "type": [
         PokemonType.Normal,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 734,
      "pokemon_name": "Yungoos",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 735,
      "pokemon_name": "Gumshoos",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 736,
      "pokemon_name": "Grubbin",
      "type": [
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 737,
      "pokemon_name": "Charjabug",
      "type": [
         PokemonType.Bug,
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 738,
      "pokemon_name": "Vikavolt",
      "type": [
         PokemonType.Bug,
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 739,
      "pokemon_name": "Crabrawler",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 740,
      "pokemon_name": "Crabominable",
      "type": [
         PokemonType.Fighting,
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 742,
      "pokemon_name": "Cutiefly",
      "type": [
         PokemonType.Bug,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 743,
      "pokemon_name": "Ribombee",
      "type": [
         PokemonType.Bug,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 744,
      "pokemon_name": "Rockruff",
      "type": [
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 747,
      "pokemon_name": "Mareanie",
      "type": [
         PokemonType.Poison,
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 748,
      "pokemon_name": "Toxapex",
      "type": [
         PokemonType.Poison,
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 749,
      "pokemon_name": "Mudbray",
      "type": [
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 750,
      "pokemon_name": "Mudsdale",
      "type": [
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 751,
      "pokemon_name": "Dewpider",
      "type": [
         PokemonType.Water,
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 752,
      "pokemon_name": "Araquanid",
      "type": [
         PokemonType.Water,
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 753,
      "pokemon_name": "Fomantis",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 754,
      "pokemon_name": "Lurantis",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 755,
      "pokemon_name": "Morelull",
      "type": [
         PokemonType.Grass,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 756,
      "pokemon_name": "Shiinotic",
      "type": [
         PokemonType.Grass,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 757,
      "pokemon_name": "Salandit",
      "type": [
         PokemonType.Poison,
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 758,
      "pokemon_name": "Salazzle",
      "type": [
         PokemonType.Poison,
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 759,
      "pokemon_name": "Stufful",
      "type": [
         PokemonType.Normal,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 760,
      "pokemon_name": "Bewear",
      "type": [
         PokemonType.Normal,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 761,
      "pokemon_name": "Bounsweet",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 762,
      "pokemon_name": "Steenee",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 763,
      "pokemon_name": "Tsareena",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 764,
      "pokemon_name": "Comfey",
      "type": [
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 765,
      "pokemon_name": "Oranguru",
      "type": [
         PokemonType.Normal,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 766,
      "pokemon_name": "Passimian",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 767,
      "pokemon_name": "Wimpod",
      "type": [
         PokemonType.Bug,
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 768,
      "pokemon_name": "Golisopod",
      "type": [
         PokemonType.Bug,
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 769,
      "pokemon_name": "Sandygast",
      "type": [
        PokemonType.Ghost,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 770,
      "pokemon_name": "Palossand",
      "type": [
        PokemonType.Ghost,
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 771,
      "pokemon_name": "Pyukumuku",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 772,
      "pokemon_name": "Type: Null",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 773,
      "pokemon_name": "Silvally",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 775,
      "pokemon_name": "Komala",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 776,
      "pokemon_name": "Turtonator",
      "type": [
         PokemonType.Fire,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 777,
      "pokemon_name": "Togedemaru",
      "type": [
        PokemonType.Electric,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 779,
      "pokemon_name": "Bruxish",
      "type": [
         PokemonType.Water,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 780,
      "pokemon_name": "Drampa",
      "type": [
         PokemonType.Normal,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 781,
      "pokemon_name": "Dhelmise",
      "type": [
        PokemonType.Ghost,
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 782,
      "pokemon_name": "Jangmo-o",
      "type": [
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 783,
      "pokemon_name": "Hakamo-o",
      "type": [
        PokemonType.Dragon,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 784,
      "pokemon_name": "Kommo-o",
      "type": [
        PokemonType.Dragon,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 785,
      "pokemon_name": "Tapu Koko",
      "type": [
        PokemonType.Electric,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 786,
      "pokemon_name": "Tapu Lele",
      "type": [
         PokemonType.Psychic,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 787,
      "pokemon_name": "Tapu Bulu",
      "type": [
         PokemonType.Grass,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 788,
      "pokemon_name": "Tapu Fini",
      "type": [
         PokemonType.Water,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 789,
      "pokemon_name": "Cosmog",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 790,
      "pokemon_name": "Cosmoem",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 791,
      "pokemon_name": "Solgaleo",
      "type": [
         PokemonType.Psychic,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 792,
      "pokemon_name": "Lunala",
      "type": [
         PokemonType.Psychic,
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 793,
      "pokemon_name": "Nihilego",
      "type": [
        PokemonType.Rock,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 794,
      "pokemon_name": "Buzzwole",
      "type": [
         PokemonType.Bug,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 795,
      "pokemon_name": "Pheromosa",
      "type": [
         PokemonType.Bug,
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 796,
      "pokemon_name": "Xurkitree",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 797,
      "pokemon_name": "Celesteela",
      "type": [
         PokemonType.Steel,
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 798,
      "pokemon_name": "Kartana",
      "type": [
         PokemonType.Grass,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 799,
      "pokemon_name": "Guzzlord",
      "type": [
        PokemonType.Dark,
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 800,
      "pokemon_name": "Necrozma",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 801,
      "pokemon_name": "Magearna",
      "type": [
         PokemonType.Steel,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 802,
      "pokemon_name": "Marshadow",
      "type": [
         PokemonType.Fighting,
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 803,
      "pokemon_name": "Poipole",
      "type": [
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 804,
      "pokemon_name": "Naganadel",
      "type": [
         PokemonType.Poison,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 805,
      "pokemon_name": "Stakataka",
      "type": [
        PokemonType.Rock,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 806,
      "pokemon_name": "Blacephalon",
      "type": [
         PokemonType.Fire,
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 807,
      "pokemon_name": "Zeraora",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 808,
      "pokemon_name": "Meltan",
      "type": [
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 809,
      "pokemon_name": "Melmetal",
      "type": [
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 810,
      "pokemon_name": "Grookey",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 811,
      "pokemon_name": "Thwackey",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 812,
      "pokemon_name": "Rillaboom",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 813,
      "pokemon_name": "Scorbunny",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 814,
      "pokemon_name": "Raboot",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 815,
      "pokemon_name": "Cinderace",
      "type": [
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 816,
      "pokemon_name": "Sobble",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 817,
      "pokemon_name": "Drizzile",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 818,
      "pokemon_name": "Inteleon",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 819,
      "pokemon_name": "Skwovet",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 820,
      "pokemon_name": "Greedent",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 821,
      "pokemon_name": "Rookidee",
      "type": [
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 822,
      "pokemon_name": "Corvisquire",
      "type": [
         PokemonType.Flying
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 823,
      "pokemon_name": "Corviknight",
      "type": [
         PokemonType.Flying,
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 824,
      "pokemon_name": "Blipbug",
      "type": [
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 825,
      "pokemon_name": "Dottler",
      "type": [
         PokemonType.Bug,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 826,
      "pokemon_name": "Orbeetle",
      "type": [
         PokemonType.Bug,
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 827,
      "pokemon_name": "Nickit",
      "type": [
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 828,
      "pokemon_name": "Thievul",
      "type": [
        PokemonType.Dark
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 829,
      "pokemon_name": "Gossifleur",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 830,
      "pokemon_name": "Eldegoss",
      "type": [
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 831,
      "pokemon_name": "Wooloo",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 832,
      "pokemon_name": "Dubwool",
      "type": [
         PokemonType.Normal
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 833,
      "pokemon_name": "Chewtle",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 834,
      "pokemon_name": "Drednaw",
      "type": [
         PokemonType.Water,
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 835,
      "pokemon_name": "Yamper",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 836,
      "pokemon_name": "Boltund",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 837,
      "pokemon_name": "Rolycoly",
      "type": [
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 838,
      "pokemon_name": "Carkol",
      "type": [
        PokemonType.Rock,
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 839,
      "pokemon_name": "Coalossal",
      "type": [
        PokemonType.Rock,
         PokemonType.Fire
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 840,
      "pokemon_name": "Applin",
      "type": [
         PokemonType.Grass,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 841,
      "pokemon_name": "Flapple",
      "type": [
         PokemonType.Grass,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 842,
      "pokemon_name": "Appletun",
      "type": [
         PokemonType.Grass,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 843,
      "pokemon_name": "Silicobra",
      "type": [
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 844,
      "pokemon_name": "Sandaconda",
      "type": [
         PokemonType.Ground
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 845,
      "pokemon_name": "Cramorant",
      "type": [
         PokemonType.Flying,
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 846,
      "pokemon_name": "Arrokuda",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 847,
      "pokemon_name": "Barraskewda",
      "type": [
         PokemonType.Water
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 848,
      "pokemon_name": "Toxel",
      "type": [
        PokemonType.Electric,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 850,
      "pokemon_name": "Sizzlipede",
      "type": [
         PokemonType.Fire,
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 851,
      "pokemon_name": "Centiskorch",
      "type": [
         PokemonType.Fire,
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 852,
      "pokemon_name": "Clobbopus",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 853,
      "pokemon_name": "Grapploct",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 856,
      "pokemon_name": "Hatenna",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 857,
      "pokemon_name": "Hattrem",
      "type": [
         PokemonType.Psychic
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 858,
      "pokemon_name": "Hatterene",
      "type": [
         PokemonType.Psychic,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 859,
      "pokemon_name": "Impidimp",
      "type": [
        PokemonType.Dark,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 860,
      "pokemon_name": "Morgrem",
      "type": [
        PokemonType.Dark,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 861,
      "pokemon_name": "Grimmsnarl",
      "type": [
        PokemonType.Dark,
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 864,
      "pokemon_name": "Cursola",
      "type": [
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 868,
      "pokemon_name": "Milcery",
      "type": [
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 869,
      "pokemon_name": "Alcremie",
      "type": [
        PokemonType.Fairy
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 870,
      "pokemon_name": "Falinks",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 871,
      "pokemon_name": "Pincurchin",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 872,
      "pokemon_name": "Snom",
      "type": [
        PokemonType.Ice,
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 873,
      "pokemon_name": "Frosmoth",
      "type": [
        PokemonType.Ice,
         PokemonType.Bug
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 874,
      "pokemon_name": "Stonjourner",
      "type": [
        PokemonType.Rock
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 878,
      "pokemon_name": "Cufant",
      "type": [
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 879,
      "pokemon_name": "Copperajah",
      "type": [
         PokemonType.Steel
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 880,
      "pokemon_name": "Dracozolt",
      "type": [
        PokemonType.Electric,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 881,
      "pokemon_name": "Arctozolt",
      "type": [
        PokemonType.Electric,
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 882,
      "pokemon_name": "Dracovish",
      "type": [
         PokemonType.Water,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 883,
      "pokemon_name": "Arctovish",
      "type": [
         PokemonType.Water,
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 884,
      "pokemon_name": "Duraludon",
      "type": [
         PokemonType.Steel,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 885,
      "pokemon_name": "Dreepy",
      "type": [
        PokemonType.Dragon,
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 886,
      "pokemon_name": "Drakloak",
      "type": [
        PokemonType.Dragon,
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 887,
      "pokemon_name": "Dragapult",
      "type": [
        PokemonType.Dragon,
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 890,
      "pokemon_name": "Eternatus",
      "type": [
         PokemonType.Poison,
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 891,
      "pokemon_name": "Kubfu",
      "type": [
         PokemonType.Fighting
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 893,
      "pokemon_name": "Zarude",
      "type": [
        PokemonType.Dark,
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 894,
      "pokemon_name": "Regieleki",
      "type": [
        PokemonType.Electric
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 895,
      "pokemon_name": "Regidrago",
      "type": [
        PokemonType.Dragon
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 896,
      "pokemon_name": "Glastrier",
      "type": [
        PokemonType.Ice
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 897,
      "pokemon_name": "Spectrier",
      "type": [
        PokemonType.Ghost
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 898,
      "pokemon_name": "Calyrex",
      "type": [
         PokemonType.Psychic,
         PokemonType.Grass
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 903,
      "pokemon_name": "Sneasler",
      "type": [
         PokemonType.Fighting,
         PokemonType.Poison
      ]
    },
    {
      form:  "Normal",
      pokemon_id: 904,
      "pokemon_name": "Overqwil",
      "type": [
        PokemonType.Dark,
         PokemonType.Poison
      ]
    }
  ]
}
