import {Injectable} from '@angular/core';
import {PokemonType} from "./pokemon-type";
import {Weakness} from "./weakness";
import {Resistance} from "./resistance";
import {TypeEffectiveness, TypeEffectivenessChart} from "./type-effectiveness";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class PokemonTypeService {

  constructor() {
  }

  getWeaknesses(pokemonType: PokemonType): PokemonType[] {
    return this.getTypeEffectiveness(pokemonType).weaknesses;
  }

  getResistances(pokemonType: PokemonType): PokemonType[] {
    return this.getTypeEffectiveness(pokemonType).resistances;
  }

  getTypeEffectiveness(pokemonType: PokemonType): TypeEffectiveness {
    let typeEffectivenessForGivenType = TypeEffectivenessChart.find(typeEffectiveness => typeEffectiveness.type === pokemonType);

    if (typeEffectivenessForGivenType) {
      return typeEffectivenessForGivenType;
    } else {
      throw error(`No type effectiveness found for type: [${pokemonType}]`)
    }
  }
}
