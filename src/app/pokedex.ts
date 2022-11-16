import {Pokemon} from "./pokemon";
import {PokemonType} from "./pokemon-type";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Pokedex {

  private pokemon: Pokemon[] = [
    {
      name: 'charmander',
      pokedexNumber: 1,
      types: [PokemonType.FIRE]
    }
  ];

  public findByName(name: string): Pokemon | undefined {
    return this.pokemon.filter(pokemon => pokemon.name.toLowerCase() === name.toLowerCase()).pop();
  }
}
