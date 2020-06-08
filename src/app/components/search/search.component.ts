import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Article } from "../../models/article/article";
import { ArticleService } from "../../services/article/article.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {
  public code = '';
  public articles : Article[];

  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.code = this._route.snapshot.paramMap.get('search');
    console.log('params', this.code)

    this._route.params.subscribe( params =>{ 
      var search = params['search']
      console.log(search)

      this._articleService.search(search).subscribe(
        response => {
         // console.log(response)
          if(response.articles){
            this.articles = response.articles
            console.log(this.articles)
          }

        },
        error =>{
          console.log(error)
         // this._router.navigate(['/home'])
         this.articles=[];
        }
      )
    })

    

  }

}
