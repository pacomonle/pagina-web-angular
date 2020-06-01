import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class Micomponente {

public titulo: string;
public comentario: string;
public year: number;
public mostrarPeliculas: boolean

    constructor() {
        this.titulo = 'componente cargado';
        this.comentario= 'soy un componente';
        this.year= 2020;
        this.mostrarPeliculas= true;

        console.log(this.titulo, this.comentario, this.year);
    }


ocultarPeliculas(){
    this.mostrarPeliculas= false
}

}