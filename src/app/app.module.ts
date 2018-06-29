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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FormulariosComponent,
    SeccionFormulariosComponent
    
    
  ],
  imports: [
    FormioModule,
    AppRoutingModule,
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
