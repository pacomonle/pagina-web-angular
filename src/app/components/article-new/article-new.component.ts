import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article/article';
import { ArticleService } from "../../services/article/article.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import  Global  from '../../services/global'
import Swal from 'sweetalert2'


@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

public article: Article
public status: string
public page_title: string
public swal: any

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
    this.page_title = 'Crear Articulo'
   }

  ngOnInit(): void {
    this.article = new Article('','','',null,'')
  }

onSubmit(){
  // console.log(this.article)
  this._articleService.create(this.article).subscribe(
    response =>{
      if (response.status === 'success'){
        this.article = response.article
        this.status='success'
        console.log(this.article, this.status)

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        // redireccion
        this._router.navigate(['/blog'])

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

}
