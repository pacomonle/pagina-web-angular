import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: any;
  public campo: string;
  constructor() { 
    this.campo = ''
    this.user = {
      nombre: '',
      apellido: '',
      bio: '',
      genero: ''
    }
  }

  ngOnInit(): void {
  }

onSubmit(){
  console.log('enviando formulario')
  console.log('form ang', this.user)
}

hasdadoclick(){
  console.log('evento click')
}

miinput(){
  console.log('evento input')
}

hassalido(){
console.log('has salido', this.campo)
}

eventkey(){
  console.log('keyup', this.campo)
}

}
