import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BagStringComponent} from './bag-string.component';
import {PokemonTypeService} from "../pokemon-type.service";
import {Pokedex} from "../pokedex";

describe('BagStringComponent', () => {
  let component: BagStringComponent;
  let fixture: ComponentFixture<BagStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BagStringComponent],
      providers: [PokemonTypeService, Pokedex]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BagStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return string for fire defender', () => {
    expect(component.attacksFireIsWeakTo())
      .toEqual('@1water,@1rock,@1ground&@2water,@2rock,@3ground,@3water,@3rock,@3ground')
  });

  it('should return string for charmander  defender', () => {

    let battleCharmanderString: string = component.getBattleStringFor('charmander');

    let moves: string[] = battleCharmanderString.split('&');
    expect(moves.length)
      .withContext("Expected the fast move types and the charged move types to be separated by a '&' symbol")
      .toEqual(2)
    let fastMoves = moves[0];
    let chargedMoves = moves[1];
    expect(fastMoves).toContain("@1water");
    expect(fastMoves).toContain("@1rock");
    expect(fastMoves).toContain("@1ground");
    expect(fastMoves.split(",").length)
      .withContext("Expected the moves to be split by commas")
      .toEqual(3);
    expect(chargedMoves).toContain("@2water");
    expect(chargedMoves).toContain("@2rock");
    expect(chargedMoves).toContain("@2ground");
    expect(chargedMoves).toContain("@3water");
    expect(chargedMoves).toContain("@3rock");
    expect(chargedMoves).toContain("@3ground");
    expect(chargedMoves.split(",").length)
      .withContext("Expected the moves to be split by commas").toEqual(6);
  });

  it('should return string for squirtle  defender', () => {

    expect(component.getBattleStringFor('bulbasaur')).toEqual("dud");
  });
});
