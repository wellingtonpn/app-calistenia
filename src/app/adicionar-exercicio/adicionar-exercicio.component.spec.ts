import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarExercicioComponent } from './adicionar-exercicio.component';

describe('AdicionarExercicioComponent', () => {
  let component: AdicionarExercicioComponent;
  let fixture: ComponentFixture<AdicionarExercicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarExercicioComponent]
    });
    fixture = TestBed.createComponent(AdicionarExercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
