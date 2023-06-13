import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AdicionarExercicioComponent } from './adicionar-exercicio/adicionar-exercicio.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ListarExerciciosComponent } from './listar-exercicios/listar-exercicios.component';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
