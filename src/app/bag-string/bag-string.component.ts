import {Component, OnInit} from '@angular/core';
import {Pokedex} from "../pokedex";
import {Pokemon} from "../pokemon";
import {PokemonTypeService} from "../pokemon-type.service";
import {PokemonType} from "../pokemon-type";
import {TypeEffectiveness} from "../type-effectiveness";

@Component({
  selector: 'app-bag-string',
  templateUrl: './bag-string.component.html',
  styleUrls: ['./bag-string.component.css']
})
export class BagStringComponent implements OnInit {

  bagString: string | undefined;
  pokedex: Pokedex;
  pokemonTypeService: PokemonTypeService;

  constructor(pokedex: Pokedex, pokemonTypeService: PokemonTypeService) {
    this.pokedex = pokedex;
    this.pokemonTypeService = pokemonTypeService;
  }

  ngOnInit(): void {
  }

  public attacksFireIsWeakTo(): string {
    return '@1water,@1rock,@1ground&@2water,@2rock,@3ground,@3water,@3rock,@3ground'
  }


  getBattleStringFor(pokemonName: string) {
    let pokemon: Pokemon | undefined = this.pokedex.findByName(pokemonName);

    if (!pokemon) {
      return 'unknown pokemon'
    }

    let typeEffectiveness: TypeEffectiveness[] = pokemon.types.flatMap(this.pokemonTypeService.getTypeEffectiveness);

    let weaknesses: PokemonType[] = typeEffectiveness.flatMap(t => t.weaknesses);
    let resistances: PokemonType[] = typeEffectiveness.flatMap(t => t.resistances);

    let weaknessesNoResistance: PokemonType[] = weaknesses
      .filter(weakness => !resistances.find(resistance => weakness === resistance))

    let fastMoveString: string = this.createFastMoveString(weaknessesNoResistance);
    let chargeMoveString: string = this.createChargeMoveString(weaknessesNoResistance);

    return `${fastMoveString}&${chargeMoveString}`;
  }

  createFastMoveString(weaknessesNoResistance: PokemonType[]): string {
    return weaknessesNoResistance
      .map(type => PokemonType[type].toLowerCase())
      .map(type => `@1${type}`)
      .join(',')
  }

  createChargeMoveString(weaknessesNoResistance: PokemonType[]): string {
    return weaknessesNoResistance
      .map(type => PokemonType[type].toLowerCase())
      .map(type => `@2${type},@3${type}`)
      .join(',');
  }
}
