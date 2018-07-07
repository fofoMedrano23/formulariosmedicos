import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import {
  FormioResource,
  FormioResourceConfig,
  FormioResourceRoutes,
  FormioResourceService
} from 'angular-formio/resource';
import { PacienteComponent } from './paciente/paciente.component';
import { PacienteResourceComponent } from './paciente-resource/paciente-resource.component';

/*inject the participant routes*/
const pacienteResourceRoutes: Routes = FormioResourceRoutes({
  view: PacienteComponent,
  resource: PacienteResourceComponent
});

@NgModule({
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(pacienteResourceRoutes)
  ],
  declarations: [PacienteComponent, PacienteResourceComponent],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'paciente',
      form: 'paciente'
    }}
  ]
})
export class PacienteModule { }
