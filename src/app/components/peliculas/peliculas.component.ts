//VENTANA DE TODAS LAS PELICULAS ALMACENADAS
import { Component, OnInit } from '@angular/core';
import {PeliculasService, Pelicula} from '../../services/pelicula.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html'
})

export class PeliculasComponent implements OnInit {

  // Array para almacenar Peliculas
  peliculas:Pelicula[]=[];


  constructor( private _peliculasService:PeliculasService,
               private router:Router) { //console.log("constructor");//
  }

  ngOnInit() {
    this.peliculas = this._peliculasService.getpeliculas();
    //console.log(this.peliculas);
  }

// Metodo para acceder a la informacion de la pelicula con parametro (Ventana Principal)
  verPelicula(idx:number){
    this.router.navigate( ['/pelicula',idx] );
  }

}
