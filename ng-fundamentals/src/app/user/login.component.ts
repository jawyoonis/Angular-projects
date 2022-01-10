import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']

})

export class LoginComponent {
    userName: any;
    password: any;
    moveoverLogin: any;
    constructor(private authService: AuthService,  private route: Router){}

    login (formValues:any){
        this.authService.loginUser(formValues.userName, formValues.password)
        this.route.navigate(["/events"])

    }
   cancel (){
       this.route.navigate(['/events'])
   }
    
}