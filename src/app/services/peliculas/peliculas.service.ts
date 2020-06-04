import { Injectable } from '@angular/core';
import { Pelicula } from "../../models/pelicula/pelicula";

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

public peliculas : Pelicula[];

  constructor() {

this.peliculas = [
  new Pelicula ( 'Spiderman 4',  2019,  'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2013/03/213474-sam-raimi-explica-cancelacion-spiderman-4.jpg?itok=ZjuIXQVq'),
  new Pelicula ( 'Los vengadores', 2018,  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZSRp2IR6FXQNeoEvKZdz_e82i9A_eeyOhveqDChDZoySiih09&usqp=CAU'),
  new Pelicula ( 'Batman', 2020, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5deNOS7wazwWj8kZhfYYMYHEK4fM7QPJ2jV6Fx5kjBWAbEYVA&usqp=CAU')
]

   }
   
  
  

  getPeliculas(){
  return  this.peliculas

  }

  holaMundo(){
    return 'Hola mundo desde un servicio'
  }


}
