import { Component, OnInit } from '@angular/core';
import { Exercicio } from '../interfaces/exercicio';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { ExercicioService } from '../service/exercicio.service';

@Component({
  selector: 'app-adicionar-exercicio',
  templateUrl: './adicionar-exercicio.component.html',
  styleUrls: ['./adicionar-exercicio.component.css']
})

export class AdicionarExercicioComponent implements OnInit {
  exec: Exercicio = new Exercicio();
  id: any;
  cadastroForm = new FormGroup({
    nomeExercicio: new FormControl(''),
    duracaoExercicio: new FormControl(''),
    equipamentoUtilizado: new FormControl(''),
  });

  constructor(private exercicioService: ExercicioService) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.exercicioService.cadastrar(this.exec).subscribe(exercicio => {
      this.exec = new Exercicio();
      debugger
      this.id = exercicio;
      console.log(this.id);
      alert("Exercicio Cadastrado com sucesso!");
    }, err => {
      console.log('Erro GET', err);
    })
  }

}
