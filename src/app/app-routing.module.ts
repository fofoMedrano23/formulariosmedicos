import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from "./home/home.component";

import { FormioAppConfig } from 'angular-formio';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { AuthConfig, AppConfig } from '../config';
import { AuthModule } from './auth/auth.module';

const routes : Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'auth',
        loadChildren: () => AuthModule
      }
    
    
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [FormioAuthService,
        {provide: FormioAuthConfig, useValue: AuthConfig},
        {provide: FormioAppConfig, useValue: AppConfig}]
})
export class AppRoutingModule {}