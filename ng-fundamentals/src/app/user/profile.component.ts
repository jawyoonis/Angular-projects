import { Component, Inject, OnInit } from '@angular/core'
import { Form, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service'
import { AuthService } from './auth.service'

@Component({
    templateUrl:'./profile.component.html',
    styleUrls:['./profile.component.css']
})
export class ProfileComponent implements  OnInit{
    profileForm!: FormGroup
    private firstName!: FormControl
    private lastName!: FormControl
    constructor(private authService:AuthService, private router: Router,
         @Inject(TOASTR_TOKEN) private toastr: Toastr){}
    

    ngOnInit(){
        
        this.firstName= new FormControl(
            this.authService.currentUser.firstName, 
            [Validators.required, Validators.pattern("[a-zA-Z].*")])
        this.lastName= new FormControl(this.authService.currentUser.lastName, 
            [Validators.required, Validators.pattern("[a-zA-Z].*")])

        this.profileForm= new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        })
        
    }

    saveProfile(profileValues: any ){
        if(this.profileForm.valid){
        this.authService.updateCurrentUser(profileValues.firstName,profileValues.lastName)
        this.toastr.success("profile changes are saved! ", "");
        }
    }
    validateFirstName(){
        return this.firstName.valid || this.firstName.untouched;
        ;
    }
    validateLastName(){
        return this.lastName.valid || this.lastName.untouched
    }
    

    cancel(){
        this.router.navigate(["/events"]);
    }
       
}