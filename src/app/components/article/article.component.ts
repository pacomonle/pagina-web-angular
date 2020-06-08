import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../../services/article/article.service";
import { Article } from '../../models/article/article';
import { Router, ActivatedRoute, Params } from "@angular/router";

import Global from "../../services/global";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article: Article;
  public url: string;

  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url
   }

  ngOnInit(): void {

    this._route.params.subscribe(params => {
      let id = params['id']
      this._articleService.getArticle(id).subscribe(
        response => {
          console.log('response', response)
          if(response.article){
            this.article=response.article
          }else if(!response.article) {
            this._router.navigate(['/home'])
          }
        },
        error => {
          console.log('error', error)
          this._router.navigate(['/home'])
        }
      )
    })

    

  }

}
