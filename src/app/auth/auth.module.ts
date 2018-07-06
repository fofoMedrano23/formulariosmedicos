import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioAuth, FormioAuthRoutes } from 'angular-formio/auth';
import { LoginComponent } from './login/login.component';
import { FormioModule } from 'angular-formio';

const authRoutes = FormioAuthRoutes({
  login: LoginComponent
});

@NgModule({
  imports: [
    CommonModule,
    FormioAuth,
    FormioModule,
    RouterModule.forChild(authRoutes)
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
