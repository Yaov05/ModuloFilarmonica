import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { MatFormFieldModule, MatNativeDateModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PruebaFormComponent } from './components/prueba-form/prueba-form.component';
import { CalendarioFormComponent } from './components/calendario-form/calendario-form.component';

import { FilarmonicaService } from './services/filarmonica.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeleccionComponent } from './components/seleccion/seleccion.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { LiquidacionComponent } from './components/liquidacion/liquidacion.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PruebaFormComponent,
    CalendarioFormComponent,
    SeleccionComponent,
    AsistenciaComponent,
    LiquidacionComponent,
    MainComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    MatTableModule
  ],
  exports: [
    RouterModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  providers: [
    FilarmonicaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
