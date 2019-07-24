import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/pelicula.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

// Variable para almacenar Peliculas Retornadas segun criterio de busqueda
  peliculas:any[] = [];

  // Variable para almacenar Valor Ingresado en la Busqueda busqueda
  termino:string;

  constructor(private activatedRoute:ActivatedRoute,
              private _peliculasService:PeliculasService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      // Almacenamiento de valor de la consulta
      this.termino = params['termino'];

       // Almacenamiento en un Array del valor retornado de la consulta
       this.peliculas = this._peliculasService.buscarPeliculas(params['termino']);
       //console.log( this.peliculas);
    });
  }

}
