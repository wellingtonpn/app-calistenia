import { Component, OnInit } from '@angular/core';
import { ExercicioService } from '../service/exercicio.service';
import { Exercicio } from '../interfaces/exercicio';

@Component({
  selector: 'app-listar-exercicios',
  templateUrl: './listar-exercicios.component.html',
  styleUrls: ['./listar-exercicios.component.css']
})
export class ListarExerciciosComponent implements OnInit {

  exercicios: any[] = [];

  exec = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
  ];

  constructor(private exercicioService: ExercicioService) { }

  ngOnInit(): void {
    this.listarExercicios();
  }

  listarExercicios() {
    debugger
    this.exercicioService.listarExercicios().subscribe(exercicio => {
      this.exercicios = exercicio;
    }, err => {
      console.log('Erro no GET', err);
    })
  }

  atualizarExercicio(id: number, exercicio: any) {
    this.exercicioService.atualizarExercicio(id, exercicio).subscribe( exercicio => {
      console.log("Atualizado com sucesso!");
      debugger
    }, err => {
      console.log("Atualização feita com sucesso!");
    });
  }

  excluirExercicio(id: number) {
    this.exercicioService.excluirExercicio(id).subscribe( exercicio => {

    }, err => {
      console.log("Atualização feita com sucesso!");
    });
  }

}
