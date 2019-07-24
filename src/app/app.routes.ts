import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'peliculas', component: PeliculasComponent},
  { path: 'pelicula/:id', component: PeliculaComponent},
  { path: 'buscar/:termino', component: BuscadorComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
