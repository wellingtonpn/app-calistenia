import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AdicionarExercicioComponent } from './adicionar-exercicio/adicionar-exercicio.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarExerciciosComponent } from './listar-exercicios/listar-exercicios.component';
import { ExercicioService } from './service/exercicio.service';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AdicionarExercicioComponent,
    HomeComponent,
    ListarExerciciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ExercicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
