import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule, MatFormField, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FilarmonicaService } from '../../services/filarmonica.service';
import { CalendarioService } from 'src/app/services/calendario.service';

export interface Calendario {
  idObra: number;
  idTipoCalendario: number;
  conseCalendario: number;
  idEstado: number;
  fechaInicio: Date;
  fechaFin: Date;
}

const ELEMENT_DATA: Calendario[] = [];

@Component({
  selector: 'app-calendario-form',
  templateUrl: './calendario-form.component.html',
  styleUrls: ['./calendario-form.component.css'],
})
export class CalendarioFormComponent implements OnInit {

  dataSource = ELEMENT_DATA;

  fechaInicio: Date;
  fechaFin: Date;
  horaInicio: string;
  horaFin: string;

  obraCalendario: any;
  datosCalendario: any;

  selectBool: boolean;

  constructor(
    private filarmonicaService: FilarmonicaService,
    private calendarioService: CalendarioService
  ) {

  }

  ngOnInit() {

    this.calendarioService.selectChange$.subscribe(valor => this.selectBool = valor);
    this.calendarioService.obraChange$.subscribe(valor => this.obraCalendario = valor);
    this.calendarioService.dataCalendarChange$.subscribe(valor => this.datosCalendario = valor);

    this.fechaInicio = new Date();
    this.fechaFin = new Date();
  }

  consultarCalendarios() {
    var idObra = "1";
    var idTipoCalen = "6";
    var conseCalendario = 23;
    this.filarmonicaService.get(
      "/calendarios/" + idObra + "/" + idTipoCalen + "/" + conseCalendario
    ).subscribe((response) => {
      ELEMENT_DATA.push({
        idObra: response[0].idObra,
        idTipoCalendario: response[0].idTipoCalendario,
        conseCalendario: response[0].conseCalendario,
        idEstado: response[0].idEstado,
        fechaInicio: response[0].fechaInicio,
        fechaFin: response[0].fechaFin
      });
      // if (Object.keys(response[0]).length !== 0) {
      //   for (var i = 0; i < Object.keys(response[0]).length; i++) {

      //   }
      // }
    });

  }


  // registrarCalendario() { // Y obra
  //   var obraStruct = {
  //     "nombre": "",
  //     "descripcion": "",
  //     "idTipoObra": 1,
  //     "idTipoCalen": 1,
  //   }
  //   console.log(calendarStruct);

  //   this.filarmonicaService.post(
  //     "/obras", obraStruct
  //   ).subscribe((response) => {
  //     console.log(response);

  //   });
  //   ///////////////////////////////////////////////////////////////////////////////////////////
  //   var d = this.datosCalendario.Inicio;
  //   var d2 = this.datosCalendario.Fin;
  //   var calendarStruct = {
  //     "IDOBRA": 1,
  //     "IDTIPOCALEN": 2,
  //     "CONSECALENDARIO": 3,
  //     "IDESTADO": 3,
  //     "FECHAINICIO": d,
  //     "FECHAFIN": d2
  //   }
  //   console.log(calendarStruct);

  //   this.filarmonicaService.post(
  //     "/calendarios", calendarStruct
  //   ).subscribe((response) => {
  //     console.log(response);
  //   });
  // }

  // se cambia el estado del calendario actual en planeación a inactivo
  terminarCalendario() {
    var idObra = "1"
    var idTipoCalendario = "4"
    var conseCalendario = 12
    var fechaInicio = this.datosCalendario.Inicio;
    var fechaFin = this.datosCalendario.Fin;
    var calendarStruct = {
      "IDESTADO": "INACTIVO",
      "FECHAINICIO": fechaInicio,
      "FECHAFIN": fechaFin
    }
    this.filarmonicaService.put(
      "/calendarios/" + idObra + "/" + idTipoCalendario + "/" + conseCalendario, calendarStruct
    ).subscribe((response) => {
      if (response[0].idEstado !== undefined) { // Si el estado del calendario está inactivo se habilita seleccion
        this.calendarioService.setBoolSelect(this.selectBool);
      }
    });
  }
}
