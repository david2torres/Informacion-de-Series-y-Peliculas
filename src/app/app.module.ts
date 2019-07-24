import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Routes
import { APP_ROUTING } from './app.routes';


//Services
import {PeliculasService} from './services/pelicula.service';


//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PeliculaTarjetaComponent } from './components/pelicula-tarjeta/pelicula-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PeliculasComponent,
    PeliculaComponent,
    BuscadorComponent,
    PeliculaTarjetaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
