import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  private calendarBool$ = new BehaviorSubject<any>(false);
  calendarChange$ = this.calendarBool$.asObservable();

  private selectBool$ = new BehaviorSubject<any>(false);
  selectChange$ = this.selectBool$.asObservable();

  private asisBool$ = new BehaviorSubject<any>(false);
  asisChange$ = this.asisBool$.asObservable();

  private liquidBool$ = new BehaviorSubject<any>(false);
  liquidChange$ = this.liquidBool$.asObservable();

  private obra = new BehaviorSubject<any>({});
  obraChange$ = this.obra.asObservable();

  private datosCalendario = new BehaviorSubject<any>({});
  dataCalendarChange$ = this.datosCalendario.asObservable();

  constructor() { }

  setBoolCalendar(valor: any) {
    this.calendarBool$.next(valor);
  }

  setBoolSelect(valor: any) {
    this.selectBool$.next(valor);
  }

  setBoolAsis(valor: any) {
    this.asisBool$.next(valor);
  }

  setBoolLiquid(valor: any) {
    this.liquidBool$.next(valor);
  }

  setObra(obra: any) {
    this.obra.next(obra);
  }

  setDatosCalendario(datos: any) {
    this.datosCalendario.next(datos);
  }

}
