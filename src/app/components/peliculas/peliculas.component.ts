import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from "../../models/pelicula/pelicula";
import { PeliculasService } from "../../services/peliculas/peliculas.service";
@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculasService]
})
export class PeliculasComponent implements OnInit {
public peliculas: Pelicula[];
public titulo: string;
public favorita : Pelicula;
public miFavorita: string;
public fecha: any;

  constructor(
    private _peliculasService: PeliculasService
  ) { 
    console.log('constructor lanzado')
    this.titulo = 'componente peliculas'
    this.peliculas= this._peliculasService.getPeliculas()
    this.fecha = new Date(2020, 8, 12);
    
  }

  ngOnInit(): void {
      console.log('this.peliculas')
      console.log(this._peliculasService.holaMundo())
  }

  DoCheck(){
    console.log(('docheck lanzado para actualizar'))
  }

  OnDestroy(){
    console.log('ondestroy el componente se va a eliminar')
  }




cambiarTitulo(){
  this.titulo = 'El titulo ha sido cambiado!!!!'
}


mostrarFavorita(event){
  
  //console.log(event.pelicula.title)
this.favorita = event.pelicula
this.miFavorita = event.pelicula.title
console.log(this.miFavorita, this.favorita)

}



}
