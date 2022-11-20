import {Component, OnInit} from '@angular/core';
import {Pokedex} from "../pokedex";
import {PokemonTypeService} from "../pokemon-type.service";
import {Type} from "../type";
import {TypeEffectiveness} from "../type-effectiveness";
import {PokemonTypesApi} from "../pokemon-types-api";

@Component({
  selector: 'app-bag-string',
  templateUrl: './bag-string.component.html',
  styleUrls: ['./bag-string.component.css']
})
export class BagStringComponent implements OnInit {

  selectedPokemonName: string | undefined;
  battleString: string | undefined;

  constructor(public pokedex: Pokedex,
              public pokemonTypeService: PokemonTypeService) {
  }

  ngOnInit(): void {
  }

  selected() {
    if (this.selectedPokemonName) {
      this.getBattleStringFor(this.selectedPokemonName);
    }
  }

  getBattleStringFor(pokemonName: string): void {
    this.pokedex.findByName(pokemonName)
      .subscribe((pokemon: PokemonTypesApi) => {
        let typeEffectivenesses: TypeEffectiveness[] =
          pokemon.type.flatMap(this.pokemonTypeService.getTypeEffectiveness);

        let vulnerableTo: Type[] = typeEffectivenesses.flatMap(t => t.vulnerableTo);
        let resistantTo: Type[] = typeEffectivenesses.flatMap(t => t.resistantTo);

        let vulnerableToWithNoResistance: Type[] = vulnerableTo
          .filter(weakness => !resistantTo.find(resistance => weakness === resistance))

        let fastMoveString: string = this.createFastMoveString(vulnerableToWithNoResistance);
        let chargeMoveString: string = this.createChargeMoveString(vulnerableToWithNoResistance);

        this.battleString = `${fastMoveString}&${chargeMoveString}`;
      });
  }


  createFastMoveString(weaknessesNoResistance: Type[]): string {
    return weaknessesNoResistance
      .map(type => Type[type].toLowerCase())
      .map(type => `@1${type}`)
      .join(',')
  }

  createChargeMoveString(weaknessesNoResistance: Type[]): string {
    return weaknessesNoResistance
      .map(type => Type[type].toLowerCase())
      .map(type => `@2${type},@3${type}`)
      .join(',');
  }
}
