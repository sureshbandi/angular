import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlaskapiService } from "../flaskapi.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Post } from "../models/post";
import { FormGroup, FormControl, Validators} from "@angular/forms";
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  constructor( private flaskapiService: FlaskapiService, private route: ActivatedRoute, private router: Router) {
    this.postSubscription = new Subscription();
    this.editSubscription = new Subscription();
    this.post= {
      title : "",
     content: "",
     cover: ""
    }
   }

  public currentId : any = this.route.snapshot.params.id;
  public postSubscription: Subscription;
  public editSubscription: Subscription;
  public post : Post;
  public editMode: boolean = false;
  public image: any;
  public busy: boolean = false;

  public editForm = new FormGroup({
    title : new FormControl('', Validators.required),
    content : new FormControl('', Validators.required),
    oldcover : new FormControl('', Validators.required),
    id: new FormControl('', Validators.required),
    covername : new FormControl('', Validators.required)
  });

  public getPostById(){
    this.postSubscription = this.flaskapiService.getPost(this.currentId).subscribe( res =>{
      debugger;
      this.post = res["data"];

      this.editForm.setValue({
        title: this.post.title,
        content : this.post.content,
        id: this.post.id,
        oldcover : this.post.oldcover ? this.post.oldcover : "",
        covername : this.post.covername
      });
    });
  }

  public handleInput($event: any){
    //getting the image or files
    this.image = $event.target["files"];
    console.log(this.image);
  }


  public enableEdit(){
    this.editMode = !this.editMode;
  }


  public editPost(formData: Post){
    this.busy = true;
    this.editSubscription = this.flaskapiService.editPost(formData, this.image).subscribe(res => {
      this.busy = false;
      console.log(res)
    })
  }

  public deletePost(postId: any){
    this.flaskapiService.deletePost(postId).subscribe(res => {
      console.log(res);
      this.router.navigate(["/"]);
    })
  }

  ngOnInit(): void {
    this.getPostById();
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }

}
