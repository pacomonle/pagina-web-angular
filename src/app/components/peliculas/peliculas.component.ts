import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public titulo: string

  constructor() { 
    console.log('constructor lanzado')
    this.titulo = 'componente peliculas'
    


  }

  ngOnInit(): void {
      console.log('oninit - componente iniciado')
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


}
