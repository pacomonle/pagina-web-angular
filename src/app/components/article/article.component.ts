import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../../services/article/article.service";
import { Article } from '../../models/article/article';
import { Router, ActivatedRoute, Params } from "@angular/router";
import Swal from 'sweetalert2'
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
  public code = ''

  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url
   }

  ngOnInit(): void {
    this.code = this._route.snapshot.paramMap.get('id');
    console.log('params', this.code)

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

  delete(id){ 
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this._articleService.delete(id).subscribe(
          response => {
             this._router.navigate(['/blog']) 
             console.log(response)
          },
          error => {
            console.log(error)
            this._router.navigate(['/blog']) 
          }
       )
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  
    
  }


}
