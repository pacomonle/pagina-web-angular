import { Injectable } from '@angular/core';
import { Article } from "../../models/article/article";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import Global from '../global'



@Injectable({
  providedIn: 'root'
})
export class ArticleService {

public url: string;


  constructor(
   private _http: HttpClient
  ) { 

this.url = Global.url

  }

pruebas(){
  return 'soy el servicio de articulos'
}

getArticles(last:any=null):Observable<any>{
  var articles = 'articles'

  if(last !== null){

  var articles = 'articles/true'

}


     return this._http.get(this.url + articles);
}

getArticle(articleId):Observable<any>{
  return this._http.get(this.url+'article/'+articleId)
}



}
