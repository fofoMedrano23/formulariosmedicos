import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from "./home/home.component";

import { FormioAppConfig } from 'angular-formio';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { AuthConfig, AppConfig } from '../config';
import { AuthModule } from './auth/auth.module';
import { FormulariosComponent } from "./formularios/formularios.component";
import {PacienteModule} from './paciente/paciente.module';
import { RegistroFormulario1Module } from "./registro-formulario1/registro-formulario1.module";
import {AuthGuard} from "./auth/auth.guard";

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
      },{
        path: 'formularios',
        component: FormulariosComponent,canActivate: [AuthGuard]
      },
      {
        path: 'paciente',
        loadChildren: () => PacienteModule
      },
      {
        path: 'patientform1resource',
        loadChildren: () => RegistroFormulario1Module 
      }
    
    
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard,FormioAuthService,
        {provide: FormioAuthConfig, useValue: AuthConfig},
        {provide: FormioAppConfig, useValue: AppConfig}]
})
export class AppRoutingModule {}