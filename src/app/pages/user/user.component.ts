import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from "./user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { User } from "../../models/user";
import { FormGroup, FormControl, Validators} from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'user-cmp',
    //moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit, OnDestroy{
    constructor( private userapiService: UserService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) {
        // this.userSubscription = new Subscription();
        // this.editSubscription = new Subscription();
        this.user={
            about_me:"",
            id:1,
            address:"",
            city:"",
            country:"",
            email:"",
            first_name:"",
            last_name:"",
            postal_code:"",
            username:""
        }
       }
       public userId : number = 1;
       public userSubscription: Subscription;
       public editSubscription: Subscription;
       public user : User;
       public editMode: boolean = false;
       public busy: boolean = false;

       public editUserForm = new FormGroup({
        email : new FormControl('', Validators.required),
        username : new FormControl('', Validators.required),
        first_name : new FormControl('', Validators.required),
        last_name : new FormControl('', Validators.required),
        address : new FormControl('', Validators.required),
        city : new FormControl('', Validators.required),
        country : new FormControl('', Validators.required),
        postal_code : new FormControl('', Validators.required),
        about_me : new FormControl('', Validators.required),
      });

      public getUser(){
        this.userSubscription = this.userapiService.getUser(this.userId).subscribe( res =>{
          this.user = res;
          console.log(this.user);
    
          this.editUserForm.setValue({
            email : this.user.email,
            username : this.user.username,
            first_name : this.user.first_name,
            last_name : this.user.last_name,
            address : this.user.address,
            city : this.user.city,
            country : this.user.country,
            postal_code : this.user.postal_code,
            about_me : this.user.about_me
          });
        });
      }

      public updateUser(formData: User){
        this.busy = true;
        formData.id = this.userId;
        this.editSubscription = this.userapiService.updateUser(formData).subscribe(res => {
          this.busy = false;
          this.toastr.success(
            '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Data has been updated successfully</span>',
            "",
            {
              timeOut: 4000,
              closeButton: true,
              enableHtml: true,
              toastClass: "alert alert-success alert-with-icon",
              positionClass: "toast-top-right"
            }
          );
        })
      }

    ngOnInit(){
        this.getUser();
    }

    ngOnDestroy(){
        this.userSubscription.unsubscribe();
    }
}
