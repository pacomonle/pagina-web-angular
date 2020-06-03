import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
 public peliculas: Array<any>
  public titulo: string

  constructor() { 
    console.log('constructor lanzado')
    this.titulo = 'componente peliculas'
    this.peliculas= [
      {year: 2019, title: 'Spiderman 4', image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2013/03/213474-sam-raimi-explica-cancelacion-spiderman-4.jpg?itok=ZjuIXQVq'},
      {year:2018, title: 'Los vengadores', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZSRp2IR6FXQNeoEvKZdz_e82i9A_eeyOhveqDChDZoySiih09&usqp=CAU'},
      {year:2020, title: 'Batman', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5deNOS7wazwWj8kZhfYYMYHEK4fM7QPJ2jV6Fx5kjBWAbEYVA&usqp=CAU'},
    ]
    


  }

  ngOnInit(): void {
      console.log('this.peliculas')
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
