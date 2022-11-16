import {Injectable} from '@angular/core';
import {PokemonType} from "./pokemon-type";
import {TypeEffectiveness, TypeEffectivenessChart} from "./type-effectiveness";

@Injectable({
  providedIn: 'root'
})
export class PokemonTypeService {

  constructor() {
  }

  getWeaknesses(pokemonType: PokemonType): PokemonType[] {
    return this.getTypeEffectiveness(pokemonType).vulnerableTo;
  }

  getResistances(pokemonType: PokemonType): PokemonType[] {
    return this.getTypeEffectiveness(pokemonType).resistantTo;
  }

  getTypeEffectiveness(pokemonType: PokemonType): TypeEffectiveness {
    let typeEffectivenessForGivenType = TypeEffectivenessChart.find(typeEffectiveness => typeEffectiveness.type === pokemonType);

    if (typeEffectivenessForGivenType) {
      return typeEffectivenessForGivenType;
    } else {
      throw Error(`No type effectiveness found for type: [${pokemonType}]`)
    }
  }
}
