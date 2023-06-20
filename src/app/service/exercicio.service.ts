import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exercicio } from '../interfaces/exercicio';
import { Observable, concat } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ExercicioService {
  url = "http://localhost:8080/exercise";
  
  constructor(private http: HttpClient) { }

  cadastrar(cadastro: Exercicio){
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(cadastro);
    return this.http.post<Exercicio>(this.url, body, {'headers': headers});
  }

  listarExercicios(){
    const headers = { 'content-type': 'application/json' }
    return this.http.get<Exercicio[]>(this.url, {"headers": headers});
  }

  atualizarExercicio(id: number, exercicio: Exercicio){
    const headers = { 'content-type': 'application/json' }
    return this.http.put<Exercicio>(this.url+"/"+id, exercicio, {'headers': headers});
  }

  excluirExercicio(id: number){
    return this.http.delete<Exercicio>(this.url+"/"+id);
  }
}
