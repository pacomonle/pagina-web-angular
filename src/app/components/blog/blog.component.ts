import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public homeText= 'Bienvenido al Curso de Angular con Francisco Monleon'
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
