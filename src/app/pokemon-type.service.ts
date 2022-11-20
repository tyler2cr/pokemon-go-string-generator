import {Injectable} from '@angular/core';
import {Type} from "./type";
import {TypeEffectiveness, TypeEffectivenessChart} from "./type-effectiveness";

@Injectable({
  providedIn: 'root'
})
export class PokemonTypeService {

  constructor() {
  }

  getTypeEffectiveness(pokemonType: Type): TypeEffectiveness {
    let typeEffectivenessForGivenType = TypeEffectivenessChart.find(typeEffectiveness => {
      return typeEffectiveness.type === pokemonType;
    });

    if (typeEffectivenessForGivenType) {
      return typeEffectivenessForGivenType;
    } else {
      throw Error(`No type effectiveness found for type: [${pokemonType}]`)
    }
  }
}
