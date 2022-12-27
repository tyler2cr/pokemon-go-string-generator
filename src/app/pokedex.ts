import {Pokemon} from "./pokemon";
import {Type} from "./type";
import {Injectable} from "@angular/core";
import {PokemonTypesApi} from "./pokemon-types-api";
import {HttpClient} from "@angular/common/http";
import {catchError, concatMap, filter, flatMap, from, map, mergeMap, Observable, of, pipe} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Pokedex {


  constructor(private http: HttpClient) {
  }

  private readPokemonFromFile(): Observable<PokemonTypesApi[]> {
    return this.http.get<PokemonTypesApi[]>('assets/pogoapi/pokemon_types.json');
  }

  private _pokemonList: Pokemon[] = [
    {
      name: 'charmander',
      types: [Type.Fire]
    },
    {
      name: 'bulbasaur',
      types: [Type.Grass, Type.Poison]
    }
  ];

  // public findByName(name: string): Pokemon | undefined {
  //   return this._pokemonList.filter(pokemon => pokemon.name.toLowerCase() === name.toLowerCase()).pop();
  // }
  // public findByName(name: string): PokemonTypes | undefined {
  //   return this._pokemonFromApi.filter(pokemon => pokemon.pokemon_name.toLowerCase() === name.toLowerCase()).pop();
  // }
  public findByNameFromFile(pokemonName: string): Observable<PokemonTypesApi> {
    return this.readPokemonFromFile()
      .pipe(
        concatMap((pokemon: PokemonTypesApi[]) => from(pokemon)),
        filter((pokemon: PokemonTypesApi) => pokemon.pokemon_name.toLowerCase() === pokemonName.toLowerCase()),
        filter((pokemon: PokemonTypesApi) => pokemon.form === 'Normal'),
        catchError((err: any, caught: Observable<PokemonTypesApi>) => {
          throw new Error('Failed to read the pokemon from the file' + err);
        }));
  }

  public findByName(pokemonName: string): PokemonTypesApi {
    const matches = this._pokemonFromApi
      .filter((pokemon: PokemonTypesApi) => pokemon.pokemon_name.toLowerCase() === pokemonName.toLowerCase())
      .filter((pokemon: PokemonTypesApi) => pokemon.form === 'Normal');

    if (matches?.length === 1) {
      return matches[0];
    } else {
      throw new Error('Expected 1 match for [' + pokemonName + '] but got [' + matches?.length + ']');
    }
  }

  // filter((pokemon: PokemonTypesApi) =>
  //   pokemon.pokemon_name.toLowerCase() === pokemonName.toLowerCase())


  // public allNames(): string[] {
  //   return this._pokemonList.map(pokemon => pokemon.name);
  // }
  public allNames(): string[] {
    return this._pokemonFromApi.map(pokemon => pokemon.pokemon_name);
  }

  // get pokemon() {
  //   return this._pokemonList
  // }
  get pokemon(): PokemonTypesApi[] {
    return this._pokemonFromApi
  }

  private _pokemonFromApi: PokemonTypesApi[] = [
    {
      form: "Normal",
      pokemon_id: 1,
      "pokemon_name": "Bulbasaur",
      "type": [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 2,
      "pokemon_name": "Ivysaur",
      "type": [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 3,
      "pokemon_name": "Venusaur",
      "type": [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 4,
      "pokemon_name": "Charmander",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 5,
      "pokemon_name": "Charmeleon",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 6,
      "pokemon_name": "Charizard",
      "type": [
        Type.Fire,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 7,
      "pokemon_name": "Squirtle",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 8,
      "pokemon_name": "Wartortle",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 9,
      "pokemon_name": "Blastoise",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 10,
      "pokemon_name": "Caterpie",
      "type": [
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 11,
      "pokemon_name": "Metapod",
      "type": [
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 12,
      "pokemon_name": "Butterfree",
      "type": [
        Type.Bug,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 13,
      "pokemon_name": "Weedle",
      "type": [
        Type.Bug,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 14,
      "pokemon_name": "Kakuna",
      "type": [
        Type.Bug,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 15,
      "pokemon_name": "Beedrill",
      "type": [
        Type.Bug,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 16,
      "pokemon_name": "Pidgey",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 17,
      "pokemon_name": "Pidgeotto",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 18,
      "pokemon_name": "Pidgeot",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 19,
      "pokemon_name": "Rattata",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 20,
      "pokemon_name": "Raticate",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 21,
      "pokemon_name": "Spearow",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 22,
      "pokemon_name": "Fearow",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 23,
      "pokemon_name": "Ekans",
      "type": [
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 24,
      "pokemon_name": "Arbok",
      "type": [
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 25,
      "pokemon_name": "Pikachu",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 26,
      "pokemon_name": "Raichu",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 27,
      "pokemon_name": "Sandshrew",
      "type": [
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 28,
      "pokemon_name": "Sandslash",
      "type": [
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 29,
      "pokemon_name": "Nidoran♀",
      "type": [
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 30,
      "pokemon_name": "Nidorina",
      "type": [
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 31,
      "pokemon_name": "Nidoqueen",
      "type": [
        Type.Poison,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 32,
      "pokemon_name": "Nidoran♂",
      "type": [
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 33,
      "pokemon_name": "Nidorino",
      "type": [
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 34,
      "pokemon_name": "Nidoking",
      "type": [
        Type.Poison,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 35,
      "pokemon_name": "Clefairy",
      "type": [
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 36,
      "pokemon_name": "Clefable",
      "type": [
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 37,
      "pokemon_name": "Vulpix",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 38,
      "pokemon_name": "Ninetales",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 39,
      "pokemon_name": "Jigglypuff",
      "type": [
        Type.Normal,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 40,
      "pokemon_name": "Wigglytuff",
      "type": [
        Type.Normal,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 41,
      "pokemon_name": "Zubat",
      "type": [
        Type.Poison,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 42,
      "pokemon_name": "Golbat",
      "type": [
        Type.Poison,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 43,
      "pokemon_name": "Oddish",
      "type": [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 44,
      "pokemon_name": "Gloom",
      "type": [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 45,
      "pokemon_name": "Vileplume",
      "type": [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 46,
      "pokemon_name": "Paras",
      "type": [
        Type.Bug,
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 47,
      "pokemon_name": "Parasect",
      "type": [
        Type.Bug,
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 48,
      "pokemon_name": "Venonat",
      "type": [
        Type.Bug,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 49,
      "pokemon_name": "Venomoth",
      "type": [
        Type.Bug,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 50,
      "pokemon_name": "Diglett",
      "type": [
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 51,
      "pokemon_name": "Dugtrio",
      "type": [
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 52,
      "pokemon_name": "Meowth",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 53,
      "pokemon_name": "Persian",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 54,
      "pokemon_name": "Psyduck",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 55,
      "pokemon_name": "Golduck",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 56,
      "pokemon_name": "Mankey",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 57,
      "pokemon_name": "Primeape",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 58,
      "pokemon_name": "Growlithe",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 59,
      "pokemon_name": "Arcanine",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 60,
      "pokemon_name": "Poliwag",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 61,
      "pokemon_name": "Poliwhirl",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 62,
      "pokemon_name": "Poliwrath",
      "type": [
        Type.Water,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 63,
      "pokemon_name": "Abra",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 64,
      "pokemon_name": "Kadabra",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 65,
      "pokemon_name": "Alakazam",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 66,
      "pokemon_name": "Machop",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 67,
      "pokemon_name": "Machoke",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 68,
      "pokemon_name": "Machamp",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 69,
      "pokemon_name": "Bellsprout",
      "type": [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 70,
      "pokemon_name": "Weepinbell",
      "type": [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 71,
      "pokemon_name": "Victreebel",
      "type": [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 72,
      "pokemon_name": "Tentacool",
      "type": [
        Type.Water,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 73,
      "pokemon_name": "Tentacruel",
      "type": [
        Type.Water,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 74,
      "pokemon_name": "Geodude",
      "type": [
        Type.Rock,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 75,
      "pokemon_name": "Graveler",
      "type": [
        Type.Rock,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 76,
      "pokemon_name": "Golem",
      "type": [
        Type.Rock,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 77,
      "pokemon_name": "Ponyta",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 78,
      "pokemon_name": "Rapidash",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 79,
      "pokemon_name": "Slowpoke",
      "type": [
        Type.Water,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 80,
      "pokemon_name": "Slowbro",
      "type": [
        Type.Water,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 81,
      "pokemon_name": "Magnemite",
      "type": [
        Type.Electric,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 82,
      "pokemon_name": "Magneton",
      "type": [
        Type.Electric,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 83,
      "pokemon_name": "Farfetch’d",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 84,
      "pokemon_name": "Doduo",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 85,
      "pokemon_name": "Dodrio",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 86,
      "pokemon_name": "Seel",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 87,
      "pokemon_name": "Dewgong",
      "type": [
        Type.Water,
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 88,
      "pokemon_name": "Grimer",
      "type": [
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 89,
      "pokemon_name": "Muk",
      "type": [
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 90,
      "pokemon_name": "Shellder",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 91,
      "pokemon_name": "Cloyster",
      "type": [
        Type.Water,
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 92,
      "pokemon_name": "Gastly",
      "type": [
        Type.Ghost,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 93,
      "pokemon_name": "Haunter",
      "type": [
        Type.Ghost,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 94,
      "pokemon_name": "Gengar",
      "type": [
        Type.Ghost,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 95,
      "pokemon_name": "Onix",
      "type": [
        Type.Rock,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 96,
      "pokemon_name": "Drowzee",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 97,
      "pokemon_name": "Hypno",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 98,
      "pokemon_name": "Krabby",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 99,
      "pokemon_name": "Kingler",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 100,
      "pokemon_name": "Voltorb",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 101,
      "pokemon_name": "Electrode",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 102,
      "pokemon_name": "Exeggcute",
      "type": [
        Type.Grass,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 103,
      "pokemon_name": "Exeggutor",
      "type": [
        Type.Grass,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 104,
      "pokemon_name": "Cubone",
      "type": [
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 105,
      "pokemon_name": "Marowak",
      "type": [
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 106,
      "pokemon_name": "Hitmonlee",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 107,
      "pokemon_name": "Hitmonchan",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 108,
      "pokemon_name": "Lickitung",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 109,
      "pokemon_name": "Koffing",
      "type": [
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 110,
      "pokemon_name": "Weezing",
      "type": [
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 111,
      "pokemon_name": "Rhyhorn",
      "type": [
        Type.Ground,
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 112,
      "pokemon_name": "Rhydon",
      "type": [
        Type.Ground,
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 113,
      "pokemon_name": "Chansey",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 114,
      "pokemon_name": "Tangela",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 115,
      "pokemon_name": "Kangaskhan",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 116,
      "pokemon_name": "Horsea",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 117,
      "pokemon_name": "Seadra",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 118,
      "pokemon_name": "Goldeen",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 119,
      "pokemon_name": "Seaking",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 120,
      "pokemon_name": "Staryu",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 121,
      "pokemon_name": "Starmie",
      "type": [
        Type.Water,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 122,
      "pokemon_name": "Mr. Mime",
      "type": [
        Type.Psychic,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 123,
      "pokemon_name": "Scyther",
      "type": [
        Type.Bug,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 124,
      "pokemon_name": "Jynx",
      "type": [
        Type.Ice,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 125,
      "pokemon_name": "Electabuzz",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 126,
      "pokemon_name": "Magmar",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 127,
      "pokemon_name": "Pinsir",
      "type": [
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 128,
      "pokemon_name": "Tauros",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 129,
      "pokemon_name": "Magikarp",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 130,
      "pokemon_name": "Gyarados",
      "type": [
        Type.Water,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 131,
      "pokemon_name": "Lapras",
      "type": [
        Type.Water,
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 132,
      "pokemon_name": "Ditto",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 133,
      "pokemon_name": "Eevee",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 134,
      "pokemon_name": "Vaporeon",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 135,
      "pokemon_name": "Jolteon",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 136,
      "pokemon_name": "Flareon",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 137,
      "pokemon_name": "Porygon",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 138,
      "pokemon_name": "Omanyte",
      "type": [
        Type.Rock,
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 139,
      "pokemon_name": "Omastar",
      "type": [
        Type.Rock,
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 140,
      "pokemon_name": "Kabuto",
      "type": [
        Type.Rock,
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 141,
      "pokemon_name": "Kabutops",
      "type": [
        Type.Rock,
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 142,
      "pokemon_name": "Aerodactyl",
      "type": [
        Type.Rock,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 143,
      "pokemon_name": "Snorlax",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 144,
      "pokemon_name": "Articuno",
      "type": [
        Type.Ice,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 145,
      "pokemon_name": "Zapdos",
      "type": [
        Type.Electric,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 146,
      "pokemon_name": "Moltres",
      "type": [
        Type.Fire,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 147,
      "pokemon_name": "Dratini",
      "type": [
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 148,
      "pokemon_name": "Dragonair",
      "type": [
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 149,
      "pokemon_name": "Dragonite",
      "type": [
        Type.Dragon,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 150,
      "pokemon_name": "Mewtwo",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 151,
      "pokemon_name": "Mew",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 152,
      "pokemon_name": "Chikorita",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 153,
      "pokemon_name": "Bayleef",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 154,
      "pokemon_name": "Meganium",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 155,
      "pokemon_name": "Cyndaquil",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 156,
      "pokemon_name": "Quilava",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 157,
      "pokemon_name": "Typhlosion",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 158,
      "pokemon_name": "Totodile",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 159,
      "pokemon_name": "Croconaw",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 160,
      "pokemon_name": "Feraligatr",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 161,
      "pokemon_name": "Sentret",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 162,
      "pokemon_name": "Furret",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 163,
      "pokemon_name": "Hoothoot",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 164,
      "pokemon_name": "Noctowl",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 165,
      "pokemon_name": "Ledyba",
      "type": [
        Type.Bug,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 166,
      "pokemon_name": "Ledian",
      "type": [
        Type.Bug,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 167,
      "pokemon_name": "Spinarak",
      "type": [
        Type.Bug,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 168,
      "pokemon_name": "Ariados",
      "type": [
        Type.Bug,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 169,
      "pokemon_name": "Crobat",
      "type": [
        Type.Poison,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 170,
      "pokemon_name": "Chinchou",
      "type": [
        Type.Water,
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 171,
      "pokemon_name": "Lanturn",
      "type": [
        Type.Water,
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 172,
      "pokemon_name": "Pichu",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 173,
      "pokemon_name": "Cleffa",
      "type": [
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 174,
      "pokemon_name": "Igglybuff",
      "type": [
        Type.Normal,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 175,
      "pokemon_name": "Togepi",
      "type": [
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 176,
      "pokemon_name": "Togetic",
      "type": [
        Type.Fairy,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 177,
      "pokemon_name": "Natu",
      "type": [
        Type.Psychic,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 178,
      "pokemon_name": "Xatu",
      "type": [
        Type.Psychic,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 179,
      "pokemon_name": "Mareep",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 180,
      "pokemon_name": "Flaaffy",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 181,
      "pokemon_name": "Ampharos",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 182,
      "pokemon_name": "Bellossom",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 183,
      "pokemon_name": "Marill",
      "type": [
        Type.Water,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 184,
      "pokemon_name": "Azumarill",
      "type": [
        Type.Water,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 185,
      "pokemon_name": "Sudowoodo",
      "type": [
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 186,
      "pokemon_name": "Politoed",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 187,
      "pokemon_name": "Hoppip",
      "type": [
        Type.Grass,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 188,
      "pokemon_name": "Skiploom",
      "type": [
        Type.Grass,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 189,
      "pokemon_name": "Jumpluff",
      "type": [
        Type.Grass,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 190,
      "pokemon_name": "Aipom",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 191,
      "pokemon_name": "Sunkern",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 192,
      "pokemon_name": "Sunflora",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 193,
      "pokemon_name": "Yanma",
      "type": [
        Type.Bug,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 194,
      "pokemon_name": "Wooper",
      "type": [
        Type.Water,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 195,
      "pokemon_name": "Quagsire",
      "type": [
        Type.Water,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 196,
      "pokemon_name": "Espeon",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 197,
      "pokemon_name": "Umbreon",
      "type": [
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 198,
      "pokemon_name": "Murkrow",
      "type": [
        Type.Dark,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 199,
      "pokemon_name": "Slowking",
      "type": [
        Type.Water,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 200,
      "pokemon_name": "Misdreavus",
      "type": [
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 201,
      "pokemon_name": "Unown",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 202,
      "pokemon_name": "Wobbuffet",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 203,
      "pokemon_name": "Girafarig",
      "type": [
        Type.Normal,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 204,
      "pokemon_name": "Pineco",
      "type": [
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 205,
      "pokemon_name": "Forretress",
      "type": [
        Type.Bug,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 206,
      "pokemon_name": "Dunsparce",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 207,
      "pokemon_name": "Gligar",
      "type": [
        Type.Ground,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 208,
      "pokemon_name": "Steelix",
      "type": [
        Type.Steel,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 209,
      "pokemon_name": "Snubbull",
      "type": [
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 210,
      "pokemon_name": "Granbull",
      "type": [
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 211,
      "pokemon_name": "Qwilfish",
      "type": [
        Type.Water,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 212,
      "pokemon_name": "Scizor",
      "type": [
        Type.Bug,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 213,
      "pokemon_name": "Shuckle",
      "type": [
        Type.Bug,
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 214,
      "pokemon_name": "Heracross",
      "type": [
        Type.Bug,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 215,
      "pokemon_name": "Sneasel",
      "type": [
        Type.Dark,
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 216,
      "pokemon_name": "Teddiursa",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 217,
      "pokemon_name": "Ursaring",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 218,
      "pokemon_name": "Slugma",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 219,
      "pokemon_name": "Magcargo",
      "type": [
        Type.Fire,
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 220,
      "pokemon_name": "Swinub",
      "type": [
        Type.Ice,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 221,
      "pokemon_name": "Piloswine",
      "type": [
        Type.Ice,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 222,
      "pokemon_name": "Corsola",
      "type": [
        Type.Water,
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 223,
      "pokemon_name": "Remoraid",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 224,
      "pokemon_name": "Octillery",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 225,
      "pokemon_name": "Delibird",
      "type": [
        Type.Ice,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 226,
      "pokemon_name": "Mantine",
      "type": [
        Type.Water,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 227,
      "pokemon_name": "Skarmory",
      "type": [
        Type.Steel,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 228,
      "pokemon_name": "Houndour",
      "type": [
        Type.Dark,
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 229,
      "pokemon_name": "Houndoom",
      "type": [
        Type.Dark,
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 230,
      "pokemon_name": "Kingdra",
      "type": [
        Type.Water,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 231,
      "pokemon_name": "Phanpy",
      "type": [
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 232,
      "pokemon_name": "Donphan",
      "type": [
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 233,
      "pokemon_name": "Porygon2",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 234,
      "pokemon_name": "Stantler",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 235,
      "pokemon_name": "Smeargle",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 236,
      "pokemon_name": "Tyrogue",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 237,
      "pokemon_name": "Hitmontop",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 238,
      "pokemon_name": "Smoochum",
      "type": [
        Type.Ice,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 239,
      "pokemon_name": "Elekid",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 240,
      "pokemon_name": "Magby",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 241,
      "pokemon_name": "Miltank",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 242,
      "pokemon_name": "Blissey",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 243,
      "pokemon_name": "Raikou",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 244,
      "pokemon_name": "Entei",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 245,
      "pokemon_name": "Suicune",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 246,
      "pokemon_name": "Larvitar",
      "type": [
        Type.Rock,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 247,
      "pokemon_name": "Pupitar",
      "type": [
        Type.Rock,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 248,
      "pokemon_name": "Tyranitar",
      "type": [
        Type.Rock,
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 249,
      "pokemon_name": "Lugia",
      "type": [
        Type.Psychic,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 250,
      "pokemon_name": "Ho-Oh",
      "type": [
        Type.Fire,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 251,
      "pokemon_name": "Celebi",
      "type": [
        Type.Psychic,
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 252,
      "pokemon_name": "Treecko",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 253,
      "pokemon_name": "Grovyle",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 254,
      "pokemon_name": "Sceptile",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 255,
      "pokemon_name": "Torchic",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 256,
      "pokemon_name": "Combusken",
      "type": [
        Type.Fire,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 257,
      "pokemon_name": "Blaziken",
      "type": [
        Type.Fire,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 258,
      "pokemon_name": "Mudkip",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 259,
      "pokemon_name": "Marshtomp",
      "type": [
        Type.Water,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 260,
      "pokemon_name": "Swampert",
      "type": [
        Type.Water,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 261,
      "pokemon_name": "Poochyena",
      "type": [
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 262,
      "pokemon_name": "Mightyena",
      "type": [
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 263,
      "pokemon_name": "Zigzagoon",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 264,
      "pokemon_name": "Linoone",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 265,
      "pokemon_name": "Wurmple",
      "type": [
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 266,
      "pokemon_name": "Silcoon",
      "type": [
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 267,
      "pokemon_name": "Beautifly",
      "type": [
        Type.Bug,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 268,
      "pokemon_name": "Cascoon",
      "type": [
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 269,
      "pokemon_name": "Dustox",
      "type": [
        Type.Bug,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 270,
      "pokemon_name": "Lotad",
      "type": [
        Type.Water,
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 271,
      "pokemon_name": "Lombre",
      "type": [
        Type.Water,
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 272,
      "pokemon_name": "Ludicolo",
      "type": [
        Type.Water,
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 273,
      "pokemon_name": "Seedot",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 274,
      "pokemon_name": "Nuzleaf",
      "type": [
        Type.Grass,
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 275,
      "pokemon_name": "Shiftry",
      "type": [
        Type.Grass,
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 276,
      "pokemon_name": "Taillow",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 277,
      "pokemon_name": "Swellow",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 278,
      "pokemon_name": "Wingull",
      "type": [
        Type.Water,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 279,
      "pokemon_name": "Pelipper",
      "type": [
        Type.Water,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 280,
      "pokemon_name": "Ralts",
      "type": [
        Type.Psychic,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 281,
      "pokemon_name": "Kirlia",
      "type": [
        Type.Psychic,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 282,
      "pokemon_name": "Gardevoir",
      "type": [
        Type.Psychic,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 283,
      "pokemon_name": "Surskit",
      "type": [
        Type.Bug,
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 284,
      "pokemon_name": "Masquerain",
      "type": [
        Type.Bug,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 285,
      "pokemon_name": "Shroomish",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 286,
      "pokemon_name": "Breloom",
      "type": [
        Type.Grass,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 287,
      "pokemon_name": "Slakoth",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 288,
      "pokemon_name": "Vigoroth",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 289,
      "pokemon_name": "Slaking",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 290,
      "pokemon_name": "Nincada",
      "type": [
        Type.Bug,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 291,
      "pokemon_name": "Ninjask",
      "type": [
        Type.Bug,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 292,
      "pokemon_name": "Shedinja",
      "type": [
        Type.Bug,
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 293,
      "pokemon_name": "Whismur",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 294,
      "pokemon_name": "Loudred",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 295,
      "pokemon_name": "Exploud",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 296,
      "pokemon_name": "Makuhita",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 297,
      "pokemon_name": "Hariyama",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 298,
      "pokemon_name": "Azurill",
      "type": [
        Type.Normal,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 299,
      "pokemon_name": "Nosepass",
      "type": [
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 300,
      "pokemon_name": "Skitty",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 301,
      "pokemon_name": "Delcatty",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 302,
      "pokemon_name": "Sableye",
      "type": [
        Type.Dark,
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 303,
      "pokemon_name": "Mawile",
      "type": [
        Type.Steel,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 304,
      "pokemon_name": "Aron",
      "type": [
        Type.Steel,
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 305,
      "pokemon_name": "Lairon",
      "type": [
        Type.Steel,
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 306,
      "pokemon_name": "Aggron",
      "type": [
        Type.Steel,
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 307,
      "pokemon_name": "Meditite",
      "type": [
        Type.Fighting,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 308,
      "pokemon_name": "Medicham",
      "type": [
        Type.Fighting,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 309,
      "pokemon_name": "Electrike",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 310,
      "pokemon_name": "Manectric",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 311,
      "pokemon_name": "Plusle",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 312,
      "pokemon_name": "Minun",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 313,
      "pokemon_name": "Volbeat",
      "type": [
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 314,
      "pokemon_name": "Illumise",
      "type": [
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 315,
      "pokemon_name": "Roselia",
      "type": [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 316,
      "pokemon_name": "Gulpin",
      "type": [
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 317,
      "pokemon_name": "Swalot",
      "type": [
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 318,
      "pokemon_name": "Carvanha",
      "type": [
        Type.Water,
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 319,
      "pokemon_name": "Sharpedo",
      "type": [
        Type.Water,
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 320,
      "pokemon_name": "Wailmer",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 321,
      "pokemon_name": "Wailord",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 322,
      "pokemon_name": "Numel",
      "type": [
        Type.Fire,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 323,
      "pokemon_name": "Camerupt",
      "type": [
        Type.Fire,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 324,
      "pokemon_name": "Torkoal",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 325,
      "pokemon_name": "Spoink",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 326,
      "pokemon_name": "Grumpig",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 327,
      "pokemon_name": "Spinda",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 328,
      "pokemon_name": "Trapinch",
      "type": [
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 329,
      "pokemon_name": "Vibrava",
      "type": [
        Type.Ground,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 330,
      "pokemon_name": "Flygon",
      "type": [
        Type.Ground,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 331,
      "pokemon_name": "Cacnea",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 332,
      "pokemon_name": "Cacturne",
      "type": [
        Type.Grass,
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 333,
      "pokemon_name": "Swablu",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 334,
      "pokemon_name": "Altaria",
      "type": [
        Type.Dragon,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 335,
      "pokemon_name": "Zangoose",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 336,
      "pokemon_name": "Seviper",
      "type": [
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 337,
      "pokemon_name": "Lunatone",
      "type": [
        Type.Rock,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 338,
      "pokemon_name": "Solrock",
      "type": [
        Type.Rock,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 339,
      "pokemon_name": "Barboach",
      "type": [
        Type.Water,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 340,
      "pokemon_name": "Whiscash",
      "type": [
        Type.Water,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 341,
      "pokemon_name": "Corphish",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 342,
      "pokemon_name": "Crawdaunt",
      "type": [
        Type.Water,
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 343,
      "pokemon_name": "Baltoy",
      "type": [
        Type.Ground,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 344,
      "pokemon_name": "Claydol",
      "type": [
        Type.Ground,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 345,
      "pokemon_name": "Lileep",
      "type": [
        Type.Rock,
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 346,
      "pokemon_name": "Cradily",
      "type": [
        Type.Rock,
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 347,
      "pokemon_name": "Anorith",
      "type": [
        Type.Rock,
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 348,
      "pokemon_name": "Armaldo",
      "type": [
        Type.Rock,
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 349,
      "pokemon_name": "Feebas",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 350,
      "pokemon_name": "Milotic",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 351,
      "pokemon_name": "Castform",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 352,
      "pokemon_name": "Kecleon",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 353,
      "pokemon_name": "Shuppet",
      "type": [
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 354,
      "pokemon_name": "Banette",
      "type": [
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 355,
      "pokemon_name": "Duskull",
      "type": [
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 356,
      "pokemon_name": "Dusclops",
      "type": [
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 357,
      "pokemon_name": "Tropius",
      "type": [
        Type.Grass,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 358,
      "pokemon_name": "Chimecho",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 359,
      "pokemon_name": "Absol",
      "type": [
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 360,
      "pokemon_name": "Wynaut",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 361,
      "pokemon_name": "Snorunt",
      "type": [
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 362,
      "pokemon_name": "Glalie",
      "type": [
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 363,
      "pokemon_name": "Spheal",
      "type": [
        Type.Ice,
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 364,
      "pokemon_name": "Sealeo",
      "type": [
        Type.Ice,
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 365,
      "pokemon_name": "Walrein",
      "type": [
        Type.Ice,
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 366,
      "pokemon_name": "Clamperl",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 367,
      "pokemon_name": "Huntail",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 368,
      "pokemon_name": "Gorebyss",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 369,
      "pokemon_name": "Relicanth",
      "type": [
        Type.Water,
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 370,
      "pokemon_name": "Luvdisc",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 371,
      "pokemon_name": "Bagon",
      "type": [
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 372,
      "pokemon_name": "Shelgon",
      "type": [
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 373,
      "pokemon_name": "Salamence",
      "type": [
        Type.Dragon,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 374,
      "pokemon_name": "Beldum",
      "type": [
        Type.Steel,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 375,
      "pokemon_name": "Metang",
      "type": [
        Type.Steel,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 376,
      "pokemon_name": "Metagross",
      "type": [
        Type.Steel,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 377,
      "pokemon_name": "Regirock",
      "type": [
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 378,
      "pokemon_name": "Regice",
      "type": [
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 379,
      "pokemon_name": "Registeel",
      "type": [
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 380,
      "pokemon_name": "Latias",
      "type": [
        Type.Dragon,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 381,
      "pokemon_name": "Latios",
      "type": [
        Type.Dragon,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 382,
      "pokemon_name": "Kyogre",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 383,
      "pokemon_name": "Groudon",
      "type": [
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 384,
      "pokemon_name": "Rayquaza",
      "type": [
        Type.Dragon,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 385,
      "pokemon_name": "Jirachi",
      "type": [
        Type.Steel,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 386,
      "pokemon_name": "Deoxys",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 387,
      "pokemon_name": "Turtwig",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 388,
      "pokemon_name": "Grotle",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 389,
      "pokemon_name": "Torterra",
      "type": [
        Type.Grass,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 390,
      "pokemon_name": "Chimchar",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 391,
      "pokemon_name": "Monferno",
      "type": [
        Type.Fire,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 392,
      "pokemon_name": "Infernape",
      "type": [
        Type.Fire,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 393,
      "pokemon_name": "Piplup",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 394,
      "pokemon_name": "Prinplup",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 395,
      "pokemon_name": "Empoleon",
      "type": [
        Type.Water,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 396,
      "pokemon_name": "Starly",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 397,
      "pokemon_name": "Staravia",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 398,
      "pokemon_name": "Staraptor",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 399,
      "pokemon_name": "Bidoof",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 400,
      "pokemon_name": "Bibarel",
      "type": [
        Type.Normal,
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 401,
      "pokemon_name": "Kricketot",
      "type": [
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 402,
      "pokemon_name": "Kricketune",
      "type": [
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 403,
      "pokemon_name": "Shinx",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 404,
      "pokemon_name": "Luxio",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 405,
      "pokemon_name": "Luxray",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 406,
      "pokemon_name": "Budew",
      "type": [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 407,
      "pokemon_name": "Roserade",
      "type": [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 408,
      "pokemon_name": "Cranidos",
      "type": [
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 409,
      "pokemon_name": "Rampardos",
      "type": [
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 410,
      "pokemon_name": "Shieldon",
      "type": [
        Type.Rock,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 411,
      "pokemon_name": "Bastiodon",
      "type": [
        Type.Rock,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 414,
      "pokemon_name": "Mothim",
      "type": [
        Type.Bug,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 415,
      "pokemon_name": "Combee",
      "type": [
        Type.Bug,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 416,
      "pokemon_name": "Vespiquen",
      "type": [
        Type.Bug,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 417,
      "pokemon_name": "Pachirisu",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 418,
      "pokemon_name": "Buizel",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 419,
      "pokemon_name": "Floatzel",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 420,
      "pokemon_name": "Cherubi",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 424,
      "pokemon_name": "Ambipom",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 425,
      "pokemon_name": "Drifloon",
      "type": [
        Type.Ghost,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 426,
      "pokemon_name": "Drifblim",
      "type": [
        Type.Ghost,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 427,
      "pokemon_name": "Buneary",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 428,
      "pokemon_name": "Lopunny",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 429,
      "pokemon_name": "Mismagius",
      "type": [
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 430,
      "pokemon_name": "Honchkrow",
      "type": [
        Type.Dark,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 431,
      "pokemon_name": "Glameow",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 432,
      "pokemon_name": "Purugly",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 433,
      "pokemon_name": "Chingling",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 434,
      "pokemon_name": "Stunky",
      "type": [
        Type.Poison,
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 435,
      "pokemon_name": "Skuntank",
      "type": [
        Type.Poison,
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 436,
      "pokemon_name": "Bronzor",
      "type": [
        Type.Steel,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 437,
      "pokemon_name": "Bronzong",
      "type": [
        Type.Steel,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 438,
      "pokemon_name": "Bonsly",
      "type": [
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 439,
      "pokemon_name": "Mime Jr.",
      "type": [
        Type.Psychic,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 440,
      "pokemon_name": "Happiny",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 441,
      "pokemon_name": "Chatot",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 442,
      "pokemon_name": "Spiritomb",
      "type": [
        Type.Ghost,
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 443,
      "pokemon_name": "Gible",
      "type": [
        Type.Dragon,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 444,
      "pokemon_name": "Gabite",
      "type": [
        Type.Dragon,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 445,
      "pokemon_name": "Garchomp",
      "type": [
        Type.Dragon,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 446,
      "pokemon_name": "Munchlax",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 447,
      "pokemon_name": "Riolu",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 448,
      "pokemon_name": "Lucario",
      "type": [
        Type.Fighting,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 449,
      "pokemon_name": "Hippopotas",
      "type": [
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 450,
      "pokemon_name": "Hippowdon",
      "type": [
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 451,
      "pokemon_name": "Skorupi",
      "type": [
        Type.Poison,
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 452,
      "pokemon_name": "Drapion",
      "type": [
        Type.Poison,
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 453,
      "pokemon_name": "Croagunk",
      "type": [
        Type.Poison,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 454,
      "pokemon_name": "Toxicroak",
      "type": [
        Type.Poison,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 455,
      "pokemon_name": "Carnivine",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 456,
      "pokemon_name": "Finneon",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 457,
      "pokemon_name": "Lumineon",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 458,
      "pokemon_name": "Mantyke",
      "type": [
        Type.Water,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 459,
      "pokemon_name": "Snover",
      "type": [
        Type.Grass,
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 460,
      "pokemon_name": "Abomasnow",
      "type": [
        Type.Grass,
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 461,
      "pokemon_name": "Weavile",
      "type": [
        Type.Dark,
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 462,
      "pokemon_name": "Magnezone",
      "type": [
        Type.Electric,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 463,
      "pokemon_name": "Lickilicky",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 464,
      "pokemon_name": "Rhyperior",
      "type": [
        Type.Ground,
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 465,
      "pokemon_name": "Tangrowth",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 466,
      "pokemon_name": "Electivire",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 467,
      "pokemon_name": "Magmortar",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 468,
      "pokemon_name": "Togekiss",
      "type": [
        Type.Fairy,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 469,
      "pokemon_name": "Yanmega",
      "type": [
        Type.Bug,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 470,
      "pokemon_name": "Leafeon",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 471,
      "pokemon_name": "Glaceon",
      "type": [
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 472,
      "pokemon_name": "Gliscor",
      "type": [
        Type.Ground,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 473,
      "pokemon_name": "Mamoswine",
      "type": [
        Type.Ice,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 474,
      "pokemon_name": "Porygon-Z",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 475,
      "pokemon_name": "Gallade",
      "type": [
        Type.Psychic,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 476,
      "pokemon_name": "Probopass",
      "type": [
        Type.Rock,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 477,
      "pokemon_name": "Dusknoir",
      "type": [
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 478,
      "pokemon_name": "Froslass",
      "type": [
        Type.Ice,
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 479,
      "pokemon_name": "Rotom",
      "type": [
        Type.Electric,
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 480,
      "pokemon_name": "Uxie",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 481,
      "pokemon_name": "Mesprit",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 482,
      "pokemon_name": "Azelf",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 483,
      "pokemon_name": "Dialga",
      "type": [
        Type.Steel,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 484,
      "pokemon_name": "Palkia",
      "type": [
        Type.Water,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 485,
      "pokemon_name": "Heatran",
      "type": [
        Type.Fire,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 486,
      "pokemon_name": "Regigigas",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 488,
      "pokemon_name": "Cresselia",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 489,
      "pokemon_name": "Phione",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 490,
      "pokemon_name": "Manaphy",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 491,
      "pokemon_name": "Darkrai",
      "type": [
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 493,
      "pokemon_name": "Arceus",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 494,
      "pokemon_name": "Victini",
      "type": [
        Type.Psychic,
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 495,
      "pokemon_name": "Snivy",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 496,
      "pokemon_name": "Servine",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 497,
      "pokemon_name": "Serperior",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 498,
      "pokemon_name": "Tepig",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 499,
      "pokemon_name": "Pignite",
      "type": [
        Type.Fire,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 500,
      "pokemon_name": "Emboar",
      "type": [
        Type.Fire,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 501,
      "pokemon_name": "Oshawott",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 502,
      "pokemon_name": "Dewott",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 503,
      "pokemon_name": "Samurott",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 504,
      "pokemon_name": "Patrat",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 505,
      "pokemon_name": "Watchog",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 506,
      "pokemon_name": "Lillipup",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 507,
      "pokemon_name": "Herdier",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 508,
      "pokemon_name": "Stoutland",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 509,
      "pokemon_name": "Purrloin",
      "type": [
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 510,
      "pokemon_name": "Liepard",
      "type": [
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 511,
      "pokemon_name": "Pansage",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 512,
      "pokemon_name": "Simisage",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 513,
      "pokemon_name": "Pansear",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 514,
      "pokemon_name": "Simisear",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 515,
      "pokemon_name": "Panpour",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 516,
      "pokemon_name": "Simipour",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 517,
      "pokemon_name": "Munna",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 518,
      "pokemon_name": "Musharna",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 519,
      "pokemon_name": "Pidove",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 520,
      "pokemon_name": "Tranquill",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 521,
      "pokemon_name": "Unfezant",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 522,
      "pokemon_name": "Blitzle",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 523,
      "pokemon_name": "Zebstrika",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 524,
      "pokemon_name": "Roggenrola",
      "type": [
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 525,
      "pokemon_name": "Boldore",
      "type": [
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 526,
      "pokemon_name": "Gigalith",
      "type": [
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 527,
      "pokemon_name": "Woobat",
      "type": [
        Type.Psychic,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 528,
      "pokemon_name": "Swoobat",
      "type": [
        Type.Psychic,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 529,
      "pokemon_name": "Drilbur",
      "type": [
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 530,
      "pokemon_name": "Excadrill",
      "type": [
        Type.Ground,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 531,
      "pokemon_name": "Audino",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 532,
      "pokemon_name": "Timburr",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 533,
      "pokemon_name": "Gurdurr",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 534,
      "pokemon_name": "Conkeldurr",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 535,
      "pokemon_name": "Tympole",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 536,
      "pokemon_name": "Palpitoad",
      "type": [
        Type.Water,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 537,
      "pokemon_name": "Seismitoad",
      "type": [
        Type.Water,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 538,
      "pokemon_name": "Throh",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 539,
      "pokemon_name": "Sawk",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 540,
      "pokemon_name": "Sewaddle",
      "type": [
        Type.Bug,
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 541,
      "pokemon_name": "Swadloon",
      "type": [
        Type.Bug,
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 542,
      "pokemon_name": "Leavanny",
      "type": [
        Type.Bug,
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 543,
      "pokemon_name": "Venipede",
      "type": [
        Type.Bug,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 544,
      "pokemon_name": "Whirlipede",
      "type": [
        Type.Bug,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 545,
      "pokemon_name": "Scolipede",
      "type": [
        Type.Bug,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 546,
      "pokemon_name": "Cottonee",
      "type": [
        Type.Grass,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 547,
      "pokemon_name": "Whimsicott",
      "type": [
        Type.Grass,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 548,
      "pokemon_name": "Petilil",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 549,
      "pokemon_name": "Lilligant",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 551,
      "pokemon_name": "Sandile",
      "type": [
        Type.Ground,
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 552,
      "pokemon_name": "Krokorok",
      "type": [
        Type.Ground,
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 553,
      "pokemon_name": "Krookodile",
      "type": [
        Type.Ground,
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 554,
      "pokemon_name": "Darumaka",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 556,
      "pokemon_name": "Maractus",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 557,
      "pokemon_name": "Dwebble",
      "type": [
        Type.Bug,
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 558,
      "pokemon_name": "Crustle",
      "type": [
        Type.Bug,
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 559,
      "pokemon_name": "Scraggy",
      "type": [
        Type.Dark,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 560,
      "pokemon_name": "Scrafty",
      "type": [
        Type.Dark,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 561,
      "pokemon_name": "Sigilyph",
      "type": [
        Type.Psychic,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 562,
      "pokemon_name": "Yamask",
      "type": [
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 563,
      "pokemon_name": "Cofagrigus",
      "type": [
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 564,
      "pokemon_name": "Tirtouga",
      "type": [
        Type.Water,
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 565,
      "pokemon_name": "Carracosta",
      "type": [
        Type.Water,
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 566,
      "pokemon_name": "Archen",
      "type": [
        Type.Rock,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 567,
      "pokemon_name": "Archeops",
      "type": [
        Type.Rock,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 568,
      "pokemon_name": "Trubbish",
      "type": [
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 569,
      "pokemon_name": "Garbodor",
      "type": [
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 570,
      "pokemon_name": "Zorua",
      "type": [
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 571,
      "pokemon_name": "Zoroark",
      "type": [
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 572,
      "pokemon_name": "Minccino",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 573,
      "pokemon_name": "Cinccino",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 574,
      "pokemon_name": "Gothita",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 575,
      "pokemon_name": "Gothorita",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 576,
      "pokemon_name": "Gothitelle",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 577,
      "pokemon_name": "Solosis",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 578,
      "pokemon_name": "Duosion",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 579,
      "pokemon_name": "Reuniclus",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 580,
      "pokemon_name": "Ducklett",
      "type": [
        Type.Water,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 581,
      "pokemon_name": "Swanna",
      "type": [
        Type.Water,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 582,
      "pokemon_name": "Vanillite",
      "type": [
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 583,
      "pokemon_name": "Vanillish",
      "type": [
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 584,
      "pokemon_name": "Vanilluxe",
      "type": [
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 587,
      "pokemon_name": "Emolga",
      "type": [
        Type.Electric,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 588,
      "pokemon_name": "Karrablast",
      "type": [
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 589,
      "pokemon_name": "Escavalier",
      "type": [
        Type.Bug,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 590,
      "pokemon_name": "Foongus",
      "type": [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 591,
      "pokemon_name": "Amoonguss",
      "type": [
        Type.Grass,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 592,
      "pokemon_name": "Frillish",
      "type": [
        Type.Water,
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 593,
      "pokemon_name": "Jellicent",
      "type": [
        Type.Water,
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 594,
      "pokemon_name": "Alomomola",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 595,
      "pokemon_name": "Joltik",
      "type": [
        Type.Bug,
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 596,
      "pokemon_name": "Galvantula",
      "type": [
        Type.Bug,
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 597,
      "pokemon_name": "Ferroseed",
      "type": [
        Type.Grass,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 598,
      "pokemon_name": "Ferrothorn",
      "type": [
        Type.Grass,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 599,
      "pokemon_name": "Klink",
      "type": [
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 600,
      "pokemon_name": "Klang",
      "type": [
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 601,
      "pokemon_name": "Klinklang",
      "type": [
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 602,
      "pokemon_name": "Tynamo",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 603,
      "pokemon_name": "Eelektrik",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 604,
      "pokemon_name": "Eelektross",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 605,
      "pokemon_name": "Elgyem",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 606,
      "pokemon_name": "Beheeyem",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 607,
      "pokemon_name": "Litwick",
      "type": [
        Type.Ghost,
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 608,
      "pokemon_name": "Lampent",
      "type": [
        Type.Ghost,
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 609,
      "pokemon_name": "Chandelure",
      "type": [
        Type.Ghost,
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 610,
      "pokemon_name": "Axew",
      "type": [
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 611,
      "pokemon_name": "Fraxure",
      "type": [
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 612,
      "pokemon_name": "Haxorus",
      "type": [
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 613,
      "pokemon_name": "Cubchoo",
      "type": [
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 614,
      "pokemon_name": "Beartic",
      "type": [
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 615,
      "pokemon_name": "Cryogonal",
      "type": [
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 616,
      "pokemon_name": "Shelmet",
      "type": [
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 617,
      "pokemon_name": "Accelgor",
      "type": [
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 618,
      "pokemon_name": "Stunfisk",
      "type": [
        Type.Ground,
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 619,
      "pokemon_name": "Mienfoo",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 620,
      "pokemon_name": "Mienshao",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 621,
      "pokemon_name": "Druddigon",
      "type": [
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 622,
      "pokemon_name": "Golett",
      "type": [
        Type.Ground,
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 623,
      "pokemon_name": "Golurk",
      "type": [
        Type.Ground,
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 624,
      "pokemon_name": "Pawniard",
      "type": [
        Type.Dark,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 625,
      "pokemon_name": "Bisharp",
      "type": [
        Type.Dark,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 626,
      "pokemon_name": "Bouffalant",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 627,
      "pokemon_name": "Rufflet",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 628,
      "pokemon_name": "Braviary",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 629,
      "pokemon_name": "Vullaby",
      "type": [
        Type.Dark,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 630,
      "pokemon_name": "Mandibuzz",
      "type": [
        Type.Dark,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 631,
      "pokemon_name": "Heatmor",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 632,
      "pokemon_name": "Durant",
      "type": [
        Type.Bug,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 633,
      "pokemon_name": "Deino",
      "type": [
        Type.Dark,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 634,
      "pokemon_name": "Zweilous",
      "type": [
        Type.Dark,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 635,
      "pokemon_name": "Hydreigon",
      "type": [
        Type.Dark,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 636,
      "pokemon_name": "Larvesta",
      "type": [
        Type.Bug,
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 637,
      "pokemon_name": "Volcarona",
      "type": [
        Type.Bug,
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 638,
      "pokemon_name": "Cobalion",
      "type": [
        Type.Steel,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 639,
      "pokemon_name": "Terrakion",
      "type": [
        Type.Rock,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 640,
      "pokemon_name": "Virizion",
      "type": [
        Type.Grass,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 643,
      "pokemon_name": "Reshiram",
      "type": [
        Type.Dragon,
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 644,
      "pokemon_name": "Zekrom",
      "type": [
        Type.Dragon,
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 646,
      "pokemon_name": "Kyurem",
      "type": [
        Type.Dragon,
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 649,
      "pokemon_name": "Genesect",
      "type": [
        Type.Bug,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 650,
      "pokemon_name": "Chespin",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 651,
      "pokemon_name": "Quilladin",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 652,
      "pokemon_name": "Chesnaught",
      "type": [
        Type.Grass,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 653,
      "pokemon_name": "Fennekin",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 654,
      "pokemon_name": "Braixen",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 655,
      "pokemon_name": "Delphox",
      "type": [
        Type.Fire,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 656,
      "pokemon_name": "Froakie",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 657,
      "pokemon_name": "Frogadier",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 658,
      "pokemon_name": "Greninja",
      "type": [
        Type.Water,
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 659,
      "pokemon_name": "Bunnelby",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 660,
      "pokemon_name": "Diggersby",
      "type": [
        Type.Normal,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 661,
      "pokemon_name": "Fletchling",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 662,
      "pokemon_name": "Fletchinder",
      "type": [
        Type.Fire,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 663,
      "pokemon_name": "Talonflame",
      "type": [
        Type.Fire,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 664,
      "pokemon_name": "Scatterbug",
      "type": [
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 665,
      "pokemon_name": "Spewpa",
      "type": [
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 666,
      "pokemon_name": "Vivillon",
      "type": [
        Type.Bug,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 667,
      "pokemon_name": "Litleo",
      "type": [
        Type.Fire,
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 668,
      "pokemon_name": "Pyroar",
      "type": [
        Type.Fire,
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 672,
      "pokemon_name": "Skiddo",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 673,
      "pokemon_name": "Gogoat",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 674,
      "pokemon_name": "Pancham",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 675,
      "pokemon_name": "Pangoro",
      "type": [
        Type.Fighting,
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 677,
      "pokemon_name": "Espurr",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 678,
      "pokemon_name": "Meowstic",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 679,
      "pokemon_name": "Honedge",
      "type": [
        Type.Steel,
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 680,
      "pokemon_name": "Doublade",
      "type": [
        Type.Steel,
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 681,
      "pokemon_name": "Aegislash",
      "type": [
        Type.Steel,
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 682,
      "pokemon_name": "Spritzee",
      "type": [
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 683,
      "pokemon_name": "Aromatisse",
      "type": [
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 684,
      "pokemon_name": "Swirlix",
      "type": [
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 685,
      "pokemon_name": "Slurpuff",
      "type": [
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 686,
      "pokemon_name": "Inkay",
      "type": [
        Type.Dark,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 687,
      "pokemon_name": "Malamar",
      "type": [
        Type.Dark,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 688,
      "pokemon_name": "Binacle",
      "type": [
        Type.Rock,
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 689,
      "pokemon_name": "Barbaracle",
      "type": [
        Type.Rock,
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 690,
      "pokemon_name": "Skrelp",
      "type": [
        Type.Poison,
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 691,
      "pokemon_name": "Dragalge",
      "type": [
        Type.Poison,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 692,
      "pokemon_name": "Clauncher",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 693,
      "pokemon_name": "Clawitzer",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 694,
      "pokemon_name": "Helioptile",
      "type": [
        Type.Electric,
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 695,
      "pokemon_name": "Heliolisk",
      "type": [
        Type.Electric,
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 696,
      "pokemon_name": "Tyrunt",
      "type": [
        Type.Rock,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 697,
      "pokemon_name": "Tyrantrum",
      "type": [
        Type.Rock,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 698,
      "pokemon_name": "Amaura",
      "type": [
        Type.Rock,
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 699,
      "pokemon_name": "Aurorus",
      "type": [
        Type.Rock,
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 700,
      "pokemon_name": "Sylveon",
      "type": [
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 701,
      "pokemon_name": "Hawlucha",
      "type": [
        Type.Fighting,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 702,
      "pokemon_name": "Dedenne",
      "type": [
        Type.Electric,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 703,
      "pokemon_name": "Carbink",
      "type": [
        Type.Rock,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 704,
      "pokemon_name": "Goomy",
      "type": [
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 705,
      "pokemon_name": "Sliggoo",
      "type": [
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 706,
      "pokemon_name": "Goodra",
      "type": [
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 707,
      "pokemon_name": "Klefki",
      "type": [
        Type.Steel,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 708,
      "pokemon_name": "Phantump",
      "type": [
        Type.Ghost,
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 709,
      "pokemon_name": "Trevenant",
      "type": [
        Type.Ghost,
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 712,
      "pokemon_name": "Bergmite",
      "type": [
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 713,
      "pokemon_name": "Avalugg",
      "type": [
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 714,
      "pokemon_name": "Noibat",
      "type": [
        Type.Flying,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 715,
      "pokemon_name": "Noivern",
      "type": [
        Type.Flying,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 716,
      "pokemon_name": "Xerneas",
      "type": [
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 717,
      "pokemon_name": "Yveltal",
      "type": [
        Type.Dark,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 718,
      "pokemon_name": "Zygarde",
      "type": [
        Type.Dragon,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 719,
      "pokemon_name": "Diancie",
      "type": [
        Type.Rock,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 721,
      "pokemon_name": "Volcanion",
      "type": [
        Type.Fire,
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 722,
      "pokemon_name": "Rowlet",
      "type": [
        Type.Grass,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 723,
      "pokemon_name": "Dartrix",
      "type": [
        Type.Grass,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 724,
      "pokemon_name": "Decidueye",
      "type": [
        Type.Grass,
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 725,
      "pokemon_name": "Litten",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 726,
      "pokemon_name": "Torracat",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 727,
      "pokemon_name": "Incineroar",
      "type": [
        Type.Fire,
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 728,
      "pokemon_name": "Popplio",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 729,
      "pokemon_name": "Brionne",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 730,
      "pokemon_name": "Primarina",
      "type": [
        Type.Water,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 731,
      "pokemon_name": "Pikipek",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 732,
      "pokemon_name": "Trumbeak",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 733,
      "pokemon_name": "Toucannon",
      "type": [
        Type.Normal,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 734,
      "pokemon_name": "Yungoos",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 735,
      "pokemon_name": "Gumshoos",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 736,
      "pokemon_name": "Grubbin",
      "type": [
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 737,
      "pokemon_name": "Charjabug",
      "type": [
        Type.Bug,
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 738,
      "pokemon_name": "Vikavolt",
      "type": [
        Type.Bug,
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 739,
      "pokemon_name": "Crabrawler",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 740,
      "pokemon_name": "Crabominable",
      "type": [
        Type.Fighting,
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 742,
      "pokemon_name": "Cutiefly",
      "type": [
        Type.Bug,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 743,
      "pokemon_name": "Ribombee",
      "type": [
        Type.Bug,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 744,
      "pokemon_name": "Rockruff",
      "type": [
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 747,
      "pokemon_name": "Mareanie",
      "type": [
        Type.Poison,
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 748,
      "pokemon_name": "Toxapex",
      "type": [
        Type.Poison,
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 749,
      "pokemon_name": "Mudbray",
      "type": [
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 750,
      "pokemon_name": "Mudsdale",
      "type": [
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 751,
      "pokemon_name": "Dewpider",
      "type": [
        Type.Water,
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 752,
      "pokemon_name": "Araquanid",
      "type": [
        Type.Water,
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 753,
      "pokemon_name": "Fomantis",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 754,
      "pokemon_name": "Lurantis",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 755,
      "pokemon_name": "Morelull",
      "type": [
        Type.Grass,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 756,
      "pokemon_name": "Shiinotic",
      "type": [
        Type.Grass,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 757,
      "pokemon_name": "Salandit",
      "type": [
        Type.Poison,
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 758,
      "pokemon_name": "Salazzle",
      "type": [
        Type.Poison,
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 759,
      "pokemon_name": "Stufful",
      "type": [
        Type.Normal,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 760,
      "pokemon_name": "Bewear",
      "type": [
        Type.Normal,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 761,
      "pokemon_name": "Bounsweet",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 762,
      "pokemon_name": "Steenee",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 763,
      "pokemon_name": "Tsareena",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 764,
      "pokemon_name": "Comfey",
      "type": [
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 765,
      "pokemon_name": "Oranguru",
      "type": [
        Type.Normal,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 766,
      "pokemon_name": "Passimian",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 767,
      "pokemon_name": "Wimpod",
      "type": [
        Type.Bug,
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 768,
      "pokemon_name": "Golisopod",
      "type": [
        Type.Bug,
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 769,
      "pokemon_name": "Sandygast",
      "type": [
        Type.Ghost,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 770,
      "pokemon_name": "Palossand",
      "type": [
        Type.Ghost,
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 771,
      "pokemon_name": "Pyukumuku",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 772,
      "pokemon_name": "Type: Null",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 773,
      "pokemon_name": "Silvally",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 775,
      "pokemon_name": "Komala",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 776,
      "pokemon_name": "Turtonator",
      "type": [
        Type.Fire,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 777,
      "pokemon_name": "Togedemaru",
      "type": [
        Type.Electric,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 779,
      "pokemon_name": "Bruxish",
      "type": [
        Type.Water,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 780,
      "pokemon_name": "Drampa",
      "type": [
        Type.Normal,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 781,
      "pokemon_name": "Dhelmise",
      "type": [
        Type.Ghost,
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 782,
      "pokemon_name": "Jangmo-o",
      "type": [
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 783,
      "pokemon_name": "Hakamo-o",
      "type": [
        Type.Dragon,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 784,
      "pokemon_name": "Kommo-o",
      "type": [
        Type.Dragon,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 785,
      "pokemon_name": "Tapu Koko",
      "type": [
        Type.Electric,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 786,
      "pokemon_name": "Tapu Lele",
      "type": [
        Type.Psychic,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 787,
      "pokemon_name": "Tapu Bulu",
      "type": [
        Type.Grass,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 788,
      "pokemon_name": "Tapu Fini",
      "type": [
        Type.Water,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 789,
      "pokemon_name": "Cosmog",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 790,
      "pokemon_name": "Cosmoem",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 791,
      "pokemon_name": "Solgaleo",
      "type": [
        Type.Psychic,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 792,
      "pokemon_name": "Lunala",
      "type": [
        Type.Psychic,
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 793,
      "pokemon_name": "Nihilego",
      "type": [
        Type.Rock,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 794,
      "pokemon_name": "Buzzwole",
      "type": [
        Type.Bug,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 795,
      "pokemon_name": "Pheromosa",
      "type": [
        Type.Bug,
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 796,
      "pokemon_name": "Xurkitree",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 797,
      "pokemon_name": "Celesteela",
      "type": [
        Type.Steel,
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 798,
      "pokemon_name": "Kartana",
      "type": [
        Type.Grass,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 799,
      "pokemon_name": "Guzzlord",
      "type": [
        Type.Dark,
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 800,
      "pokemon_name": "Necrozma",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 801,
      "pokemon_name": "Magearna",
      "type": [
        Type.Steel,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 802,
      "pokemon_name": "Marshadow",
      "type": [
        Type.Fighting,
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 803,
      "pokemon_name": "Poipole",
      "type": [
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 804,
      "pokemon_name": "Naganadel",
      "type": [
        Type.Poison,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 805,
      "pokemon_name": "Stakataka",
      "type": [
        Type.Rock,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 806,
      "pokemon_name": "Blacephalon",
      "type": [
        Type.Fire,
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 807,
      "pokemon_name": "Zeraora",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 808,
      "pokemon_name": "Meltan",
      "type": [
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 809,
      "pokemon_name": "Melmetal",
      "type": [
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 810,
      "pokemon_name": "Grookey",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 811,
      "pokemon_name": "Thwackey",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 812,
      "pokemon_name": "Rillaboom",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 813,
      "pokemon_name": "Scorbunny",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 814,
      "pokemon_name": "Raboot",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 815,
      "pokemon_name": "Cinderace",
      "type": [
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 816,
      "pokemon_name": "Sobble",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 817,
      "pokemon_name": "Drizzile",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 818,
      "pokemon_name": "Inteleon",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 819,
      "pokemon_name": "Skwovet",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 820,
      "pokemon_name": "Greedent",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 821,
      "pokemon_name": "Rookidee",
      "type": [
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 822,
      "pokemon_name": "Corvisquire",
      "type": [
        Type.Flying
      ]
    },
    {
      form: "Normal",
      pokemon_id: 823,
      "pokemon_name": "Corviknight",
      "type": [
        Type.Flying,
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 824,
      "pokemon_name": "Blipbug",
      "type": [
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 825,
      "pokemon_name": "Dottler",
      "type": [
        Type.Bug,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 826,
      "pokemon_name": "Orbeetle",
      "type": [
        Type.Bug,
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 827,
      "pokemon_name": "Nickit",
      "type": [
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 828,
      "pokemon_name": "Thievul",
      "type": [
        Type.Dark
      ]
    },
    {
      form: "Normal",
      pokemon_id: 829,
      "pokemon_name": "Gossifleur",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 830,
      "pokemon_name": "Eldegoss",
      "type": [
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 831,
      "pokemon_name": "Wooloo",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 832,
      "pokemon_name": "Dubwool",
      "type": [
        Type.Normal
      ]
    },
    {
      form: "Normal",
      pokemon_id: 833,
      "pokemon_name": "Chewtle",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 834,
      "pokemon_name": "Drednaw",
      "type": [
        Type.Water,
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 835,
      "pokemon_name": "Yamper",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 836,
      "pokemon_name": "Boltund",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 837,
      "pokemon_name": "Rolycoly",
      "type": [
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 838,
      "pokemon_name": "Carkol",
      "type": [
        Type.Rock,
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 839,
      "pokemon_name": "Coalossal",
      "type": [
        Type.Rock,
        Type.Fire
      ]
    },
    {
      form: "Normal",
      pokemon_id: 840,
      "pokemon_name": "Applin",
      "type": [
        Type.Grass,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 841,
      "pokemon_name": "Flapple",
      "type": [
        Type.Grass,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 842,
      "pokemon_name": "Appletun",
      "type": [
        Type.Grass,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 843,
      "pokemon_name": "Silicobra",
      "type": [
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 844,
      "pokemon_name": "Sandaconda",
      "type": [
        Type.Ground
      ]
    },
    {
      form: "Normal",
      pokemon_id: 845,
      "pokemon_name": "Cramorant",
      "type": [
        Type.Flying,
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 846,
      "pokemon_name": "Arrokuda",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 847,
      "pokemon_name": "Barraskewda",
      "type": [
        Type.Water
      ]
    },
    {
      form: "Normal",
      pokemon_id: 848,
      "pokemon_name": "Toxel",
      "type": [
        Type.Electric,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 850,
      "pokemon_name": "Sizzlipede",
      "type": [
        Type.Fire,
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 851,
      "pokemon_name": "Centiskorch",
      "type": [
        Type.Fire,
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 852,
      "pokemon_name": "Clobbopus",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 853,
      "pokemon_name": "Grapploct",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 856,
      "pokemon_name": "Hatenna",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 857,
      "pokemon_name": "Hattrem",
      "type": [
        Type.Psychic
      ]
    },
    {
      form: "Normal",
      pokemon_id: 858,
      "pokemon_name": "Hatterene",
      "type": [
        Type.Psychic,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 859,
      "pokemon_name": "Impidimp",
      "type": [
        Type.Dark,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 860,
      "pokemon_name": "Morgrem",
      "type": [
        Type.Dark,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 861,
      "pokemon_name": "Grimmsnarl",
      "type": [
        Type.Dark,
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 864,
      "pokemon_name": "Cursola",
      "type": [
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 868,
      "pokemon_name": "Milcery",
      "type": [
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 869,
      "pokemon_name": "Alcremie",
      "type": [
        Type.Fairy
      ]
    },
    {
      form: "Normal",
      pokemon_id: 870,
      "pokemon_name": "Falinks",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 871,
      "pokemon_name": "Pincurchin",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 872,
      "pokemon_name": "Snom",
      "type": [
        Type.Ice,
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 873,
      "pokemon_name": "Frosmoth",
      "type": [
        Type.Ice,
        Type.Bug
      ]
    },
    {
      form: "Normal",
      pokemon_id: 874,
      "pokemon_name": "Stonjourner",
      "type": [
        Type.Rock
      ]
    },
    {
      form: "Normal",
      pokemon_id: 878,
      "pokemon_name": "Cufant",
      "type": [
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 879,
      "pokemon_name": "Copperajah",
      "type": [
        Type.Steel
      ]
    },
    {
      form: "Normal",
      pokemon_id: 880,
      "pokemon_name": "Dracozolt",
      "type": [
        Type.Electric,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 881,
      "pokemon_name": "Arctozolt",
      "type": [
        Type.Electric,
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 882,
      "pokemon_name": "Dracovish",
      "type": [
        Type.Water,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 883,
      "pokemon_name": "Arctovish",
      "type": [
        Type.Water,
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 884,
      "pokemon_name": "Duraludon",
      "type": [
        Type.Steel,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 885,
      "pokemon_name": "Dreepy",
      "type": [
        Type.Dragon,
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 886,
      "pokemon_name": "Drakloak",
      "type": [
        Type.Dragon,
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 887,
      "pokemon_name": "Dragapult",
      "type": [
        Type.Dragon,
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 890,
      "pokemon_name": "Eternatus",
      "type": [
        Type.Poison,
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 891,
      "pokemon_name": "Kubfu",
      "type": [
        Type.Fighting
      ]
    },
    {
      form: "Normal",
      pokemon_id: 893,
      "pokemon_name": "Zarude",
      "type": [
        Type.Dark,
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 894,
      "pokemon_name": "Regieleki",
      "type": [
        Type.Electric
      ]
    },
    {
      form: "Normal",
      pokemon_id: 895,
      "pokemon_name": "Regidrago",
      "type": [
        Type.Dragon
      ]
    },
    {
      form: "Normal",
      pokemon_id: 896,
      "pokemon_name": "Glastrier",
      "type": [
        Type.Ice
      ]
    },
    {
      form: "Normal",
      pokemon_id: 897,
      "pokemon_name": "Spectrier",
      "type": [
        Type.Ghost
      ]
    },
    {
      form: "Normal",
      pokemon_id: 898,
      "pokemon_name": "Calyrex",
      "type": [
        Type.Psychic,
        Type.Grass
      ]
    },
    {
      form: "Normal",
      pokemon_id: 903,
      "pokemon_name": "Sneasler",
      "type": [
        Type.Fighting,
        Type.Poison
      ]
    },
    {
      form: "Normal",
      pokemon_id: 904,
      "pokemon_name": "Overqwil",
      "type": [
        Type.Dark,
        Type.Poison
      ]
    }
  ]
}
