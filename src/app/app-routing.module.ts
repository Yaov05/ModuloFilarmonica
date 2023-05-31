import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaFormComponent } from './components/prueba-form/prueba-form.component';
import { CalendarioFormComponent } from './components/calendario-form/calendario-form.component';
import { SeleccionComponent } from './components/seleccion/seleccion.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/pruebas',
  //   pathMatch: 'full'
  // },
  {
    path: 'calendario',
    component: CalendarioFormComponent
  },
  {
    path: 'seleccion',
    component: SeleccionComponent
  },
  {
    path: 'asistencia',
    component: AsistenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
