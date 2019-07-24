// Vista de informacion de pelicula seleccionda
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {PeliculasService} from '../../services/pelicula.service';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html'
})

export class PeliculaComponent {

// Almacenamiento de dato tipo any para id de la pelicula
  pelicula:any = {};

  constructor(private activatedRoute:ActivatedRoute,
              private _peliculasService:PeliculasService
              ) {
      // Se accede a la informacion de la pelicula por el Id
      this.activatedRoute.params.subscribe(params => {
      this.pelicula = this._peliculasService.getpelicula( params ['id']);
    });
   }
}
