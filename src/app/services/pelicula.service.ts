// Servicios de la Pagina Web

import { Injectable } from '@angular/core';

@Injectable()
export class PeliculasService {

  // Arreglo con Informacion de Peliculas que se requiere para llenar los campos
  private peliculas:Pelicula[] = [
    {
      nombre: "The BigBang Theory",
      bio:"Leonard y Sheldon son dos cerebros privilegiados que no tienen ni la menor idea de cómo relacionarse socialmente, especialmente con las chicas. Penny altera la vida sentimental de Leonard y el desorden obsesivo-compulsivo de Sheldon.",
      img: "assets/img/TBT.jpg",
      genero: "Comedia",
      actores:"Chuck Lorre, Bill Prady, Maria Ferrari, Steven Molaro"
    },
    {
      nombre: "Advengers",
      bio: "El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial..",
      img: "assets/img/Advengers.jpg",
      genero: "Ficcion",
      actores:"Capitan America"
    },
    {
      nombre: "Aniquilacion",
      bio: "Lena, bióloga y antigua soldado, se une a la misión que busca a su esposo, desaparecido en una región de acceso restringido. Mientras recorren el área comprueban que está poblada por criaturas terroríficas, tan hermosas como mortíferas.",
      img: "assets/img/Aniquilacion.jpg",
      genero: "Suspenso",
      actores:"Regency Village Theatre"
    },
    {
      nombre: "Avatar",
      bio:"En un exuberante planeta llamado Pandora viven los Na'vi, seres que aparentan ser primitivos pero que en realidad son muy evolucionados. Debido a que el ambiente de Pandora es venenoso, los híbridos humanos/Na'vi, llamados Avatares, están relacionados con las mentes humanas, lo que les permite moverse libremente por Pandora. Jake Sully, un exinfante de marina paralítico se transforma a través de un Avatar, y se enamora de una mujer Na'vi.",
      img: "assets/img/Avatar.jpg",
      genero: "Accion",
      actores: "James Cameron; Jon Landau; Rae Sanchini"
    },
    {
      nombre: "La Casa De Papel",
      bio:"Una banda organizada de ladrones tiene el objetivo de cometer el atraco del siglo en la Fábrica Nacional de Moneda y Timbre. Cinco meses de preparación quedarán reducidos a once días para poder llevar a cabo con éxito el gran golpe.",
      img: "assets/img/La Casa de Papel.jpg",
      genero: "Serie de televisión",
      actores: "Álex Pina"
    },
    {
      nombre: "John Wick",
      bio:"John Wick regresa de nuevo pero con una recompensa sobre su cabeza que persigue unos mercenarios. Tras asesinar a uno de los miembros de su gremio, Wick es expulsado y se convierte en el foco de atención de todos los sicarios de la organización.",
      img: "assets/img/Jhon Wick.jpg",
      genero: "Misterio/Cine policíaco ",
      actores: "KEANU REEVES"
    },
    {
      nombre: "Toy Story",
      bio:"Woody siempre ha tenido claro cuál es su labor en el mundo y cuál es su prioridad: cuidar a su dueño, ya sea Andy o Bonnie. Sin embargo, Woody descubrirá lo grande que puede ser el mundo para un juguete cuando Forky se convierta en su nuevo compañero de habitación. Los juguetes se embarcarán en una aventura de la que no se olvidarán jamás.",
      img: "assets/img/ToyStory.jpg",
      genero: "Fantasía/Aventura ",
      actores: "Josh Cooley"
    }
  ];

// Metodo Constructor
  constructor() {
      console.log("Ready to use Service!!!")
   }

// Metodo para obtener peliculas desde un Array
   getpeliculas():Pelicula[]{
     return this.peliculas;
   }

//Metodo para obtener pelicula por parametro Ingresado
   getpelicula(idx:string){
     return this.peliculas[idx];
   }

// Metodo Para realizar la busqueda de la Pelicula
   buscarPeliculas( termino:string ){
     // Variable para almacenar busqueda
     let peliculasArr:Pelicula[] = [];

     // Variable para almcenar texto ingresado en minuscula
     termino = termino.toLowerCase();

     // Ciclo Para recoger peliculas
     for ( let i = 0; i<this.peliculas.length; i++ ){

        // Variable que almacena pelicula a comparar desde el Array
        let pelicula = this.peliculas[i];

       // Variable para almcenar texto  en minuscula
        let nombre = pelicula.nombre.toLowerCase();

        //Comparacion para almaecnar consulta que cumpla con los criterios solicitados
        //Se Almacenan en el ARRAY.
        if(nombre.indexOf(termino) >= 0){
          pelicula.index = i;
          peliculasArr.push(pelicula);
        }
     }
     return peliculasArr;
   }
}
// Interface de Campos de Pelicula
   export interface Pelicula{
     nombre:string;
     bio:string;
     img:string;
     genero:string;
     actores:string;
     index?:number;
   };
