import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { UserRoutes } from './user.routes';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [ProfileComponent, 
    LoginComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    RouterModule.forChild(UserRoutes),
    FormsModule
  ]
})
export class UserModule { }
