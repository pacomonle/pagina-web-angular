import { Component, OnInit } from '@angular/core';
// para redirigir
import { Router } from "@angular/router";


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor( private _router: Router) { }

  ngOnInit(): void {
  }

  redireccion(){
    
    this._router.navigate(['/home'])
  }


}
