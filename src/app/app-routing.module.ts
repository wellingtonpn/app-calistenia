import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarExercicioComponent } from './adicionar-exercicio/adicionar-exercicio.component';
import { HomeComponent } from './home/home.component';
import { ListarExerciciosComponent } from './listar-exercicios/listar-exercicios.component';
// const arquivo = new File();
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'adicionarExercicio', component: AdicionarExercicioComponent },
  { path: 'listarExercicios', component: ListarExerciciosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
