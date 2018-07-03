import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormioModule } from 'angular-formio';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { SeccionFormulariosComponent } from './formularios/seccion-formularios/seccion-formularios.component';
import { FormioGrid } from 'angular-formio/grid';
import { Formulario1Component } from './formularios/formulario1/formulario1.component';
import { FormularioSolicitudAnalisisComponent } from './formularios/formulario-solicitud-analisis/formulario-solicitud-analisis.component';
import { ReportesComponent } from './reportes/reportes.component';
import { SeccionReportesComponent } from './reportes/seccion-reportes/seccion-reportes.component';
import { ReporteSolicitudAnalisisComponent } from './reportes/reporte-solicitud-analisis/reporte-solicitud-analisis.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FormulariosComponent,
    SeccionFormulariosComponent,
    Formulario1Component,
    FormularioSolicitudAnalisisComponent,
    ReportesComponent,
    SeccionReportesComponent,
    ReporteSolicitudAnalisisComponent
    
    
  ],
  imports: [
    FormioGrid,
    FormioModule,
    AppRoutingModule,
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
