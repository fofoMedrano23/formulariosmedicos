import { Component, OnInit } from '@angular/core';
import { FormioResourceConfig, FormioResourceService, FormioResourceViewComponent } from 'angular-formio/resource';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent extends FormioResourceViewComponent implements OnInit {

  constructor(service: FormioResourceService, config: FormioResourceConfig){
    super(service, config);
   }

  ngOnInit() {
  }

}
