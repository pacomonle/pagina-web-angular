import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../../services/article/article.service";
import { Article } from "../../models/article/article";
import Global from "../../services/global";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {
  public homeText= 'Bienvenido al Curso de Angular con Francisco Monleon'
  public articles: Article[];
  public url: string;

  constructor(
    private _articleService : ArticleService
    ) {
    this.url = Global.url
   }

  ngOnInit(): void {
   // this._articleService.pruebas();
   // console.log(this._articleService.pruebas())

   this._articleService.getArticles().subscribe(
     response => {
        console.log(response)
        if(response.articles){
          this.articles = response.articles
        }else{
          return
        }
     },
     error => {
       console.log(error)
     }
   )

  }

}
