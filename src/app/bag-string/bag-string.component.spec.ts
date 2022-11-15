import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagStringComponent } from './bag-string.component';

describe('BagStringComponent', () => {
  let component: BagStringComponent;
  let fixture: ComponentFixture<BagStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagStringComponent ]
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

    expect(component.getString('charmander'))
      .toEqual('@1water,@1rock,@1ground&@2water,@2rock,@3ground,@3water,@3rock,@3ground')
  });

  it('should return string for squirtle  defender', () => {

    expect(component.getString('squirtle'))
  });
});
