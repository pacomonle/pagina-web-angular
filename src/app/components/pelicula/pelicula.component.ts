import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from "../../models/pelicula/pelicula";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
@Input() pelicula: Pelicula;
@Output() marcarFavorita = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }


seleccionar(event,  pelicula){
  console.log(event)
  this.marcarFavorita.emit({
    pelicula: pelicula
  })

}


}
