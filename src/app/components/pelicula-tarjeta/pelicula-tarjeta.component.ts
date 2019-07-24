// Desarrollo de Implementacion de Tarjeta
import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula-tarjeta',
  templateUrl: './pelicula-tarjeta.component.html'
})

export class PeliculaTarjetaComponent implements OnInit {

// Input que almacenan los paramatros informacion e indice de la pelicula seleccionada
  @Input() pelicula: any = {};
  @Input() index:number;

  constructor( private router:Router) {}

  ngOnInit() {
  }

// Metodo para acceder a la informacion de la pelicula sin parametros
  verPelicula(){
     console.log(this.index);
     this.router.navigate(['/pelicula', this.index ])

  }
}
