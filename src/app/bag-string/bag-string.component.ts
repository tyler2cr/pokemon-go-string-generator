import {Component, OnInit} from '@angular/core';
import {Pokedex} from "../pokedex";
import {Pokemon} from "../pokemon";
import {PokemonTypeService} from "../pokemon-type.service";
import {PokemonType} from "../pokemon-type";
import {TypeEffectiveness} from "../type-effectiveness";
import {MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-bag-string',
  templateUrl: './bag-string.component.html',
  styleUrls: ['./bag-string.component.css']
})
export class BagStringComponent implements OnInit {

  bagString: string | undefined;
  pokedex: Pokedex;
  pokemonTypeService: PokemonTypeService;
  public selectedPokemonName: string | undefined;

  constructor(pokedex: Pokedex, pokemonTypeService: PokemonTypeService) {
    this.pokedex = pokedex;
    this.pokemonTypeService = pokemonTypeService;
  }

  ngOnInit(): void {
  }

  getBattleStringFor(pokemonName: string): string {
    let pokemon: Pokemon | undefined = this.pokedex.findByName(pokemonName);

    if (!pokemon) {
      throw new Error(`unknown pokemon: ${pokemonName}`);
    }

    let typeEffectiveness: TypeEffectiveness[] =
      pokemon.types.flatMap(this.pokemonTypeService.getTypeEffectiveness);

    let vulnerableTo: PokemonType[] = typeEffectiveness.flatMap(t => t.vulnerableTo);
    let resistantTo: PokemonType[] = typeEffectiveness.flatMap(t => t.resistantTo);

    let vulnerableToWithNoResistance: PokemonType[] = vulnerableTo
      .filter(weakness => !resistantTo.find(resistance => weakness === resistance))

    let fastMoveString: string = this.createFastMoveString(vulnerableToWithNoResistance);
    let chargeMoveString: string = this.createChargeMoveString(vulnerableToWithNoResistance);

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
