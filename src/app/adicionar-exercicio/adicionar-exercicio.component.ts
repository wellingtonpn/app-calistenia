import { Component, OnInit } from '@angular/core';
import { Exercicio } from '../interfaces/exercicio';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adicionar-exercicio',
  templateUrl: './adicionar-exercicio.component.html',
  styleUrls: ['./adicionar-exercicio.component.css']
})

export class AdicionarExercicioComponent implements OnInit {
  cadastroForm = new FormGroup({
    nomeExercicio: new FormControl(''),
    duracaoExercicio: new FormControl(''),
    equipamentoUtilizado: new FormControl(''),
  });
  
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
  }

  cadastrar() {
    debugger
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(this.cadastroForm.value);
    let url = "https://localhost:8080/cadastrar";
    return this.http.post<Exercicio>(url, body, { 'headers': headers });
  }

}
