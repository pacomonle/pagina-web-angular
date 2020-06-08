import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article/article';
import { ArticleService } from "../../services/article/article.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import  Global  from '../../services/global'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article
  public status: string
  public is_edit: boolean
  public page_title: string
  public code = ''
  public url: string;
  
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png., .gift, .jpeg",
    maxSize: "50",
    uploadAPI:  {
      url: Global.url+'upload-image/',
          },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube la imagen del articulo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
   
  };
  
    constructor(
      private _articleService: ArticleService,
      private _route: ActivatedRoute,
      private _router: Router
    ) {
      this.article = new Article('','','',null,'')
      this.is_edit = true
      this.page_title = 'Editar Articulo'
      this.url = Global.url
      console.log('editar',this.url, this.is_edit)
     }
  
    ngOnInit(): void {
      //this.article = new Article('','','',null,'')
      this.getArticle()
    }

    onSubmit(){
      // console.log(this.article)
      this._articleService.update(this.article._id, this.article).subscribe(
        response =>{
          if (response.status === 'success'){
            this.article = response.article
            this.status='success'
            console.log(this.article, this.status)
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })

            // redireccion
            this._router.navigate(['/blog/articulo', this.article._id])
    
          }else{
            this.status='error'
          }
    
        },
        error =>{
          console.log(error)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
          })
          this.status='error'
        }
    
      )
    }
    
    DocUpload(data){
      console.log('mi imagen', data.body)
      let image_data = data.body
      console.log(image_data.image)
    
      this.article.image = image_data.image
    }

    getArticle(){
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
    

}
