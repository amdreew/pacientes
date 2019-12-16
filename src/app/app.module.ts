import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { PacienteContratosComponent } from './components/pacientes/paciente-contratos/paciente-contratos.component';

@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent,   
    PacienteContratosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
