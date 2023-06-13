import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarExerciciosComponent } from './listar-exercicios.component';

describe('ListarExerciciosComponent', () => {
  let component: ListarExerciciosComponent;
  let fixture: ComponentFixture<ListarExerciciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarExerciciosComponent]
    });
    fixture = TestBed.createComponent(ListarExerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
