import {Component, OnInit} from '@angular/core';
import {Pokedex} from "../pokedex";
import {Pokemon} from "../pokemon";
import {PokemonTypeService} from "../pokemon-type.service";
import {PokemonType} from "../pokemon-type";

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


  getString(pokemonName: string) {
    let pokemon: Pokemon | undefined = this.pokedex.findByName(pokemonName);

    if (!pokemon) {
      return 'unknown pokemon'
    }

    let pokemonTypes = pokemon.types;

    let weaknesses: PokemonType[] = pokemonTypes.flatMap(this.pokemonTypeService.getWeaknesses);
    let resistances: PokemonType[] = pokemonTypes.flatMap(this.pokemonTypeService.getResistances);

    let weaknessesNoResistance: PokemonType[] = weaknesses
      .filter(weakness => !resistances.find(resistance => weakness === resistance))


    let fastMoveString: string = this.createFastMoveString(weaknessesNoResistance);
    let chargeMoveString: string = this.createChargeMoveString(weaknessesNoResistance);

    return `${fastMoveString}&${chargeMoveString}`;
  }

  createFastMoveString(weaknessesNoResistance: PokemonType[]): string {
    return weaknessesNoResistance
      .map(type => `@1${type.toString().toLowerCase()}`)
      .join(',')
  }

  createChargeMoveString(weaknessesNoResistance: PokemonType[]): string {
    return weaknessesNoResistance
      .map(type => type.toString().toLowerCase())
      .map(type => `@2${type},@3${type}`)
      .join(',');
  }
}
