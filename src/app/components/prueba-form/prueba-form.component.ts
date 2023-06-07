import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FilarmonicaService } from 'src/app/services/filarmonica.service';
import { CalendarioService } from 'src/app/services/calendario.service';

@Component({
  selector: 'app-prueba-form',
  templateUrl: './prueba-form.component.html',
  styleUrls: ['./prueba-form.component.css']
})
export class PruebaFormComponent implements OnInit {

  nombre: string;
  apellido: string;
  cedula: string;
  telefono: string;
  correo: string;

  fechaInicio: Date;
  fechaFin: Date;
  horaInicio: string;
  horaFin: string;

  calendarBool: boolean;

  constructor(
    private filarmonicaService: FilarmonicaService,
    private calendarioService: CalendarioService
  ) { }

  ngOnInit() {
    this.calendarioService.calendarChange$.subscribe(valor => this.calendarBool = valor);
    this.fechaInicio = new Date();
    this.fechaFin = new Date();
  }

  consultarObras() {
    this.filarmonicaService
      .get(
        "/obras/"
      )
      .subscribe((data: any) => {
        if (Object.keys(data[0]).length !== 0) {
          // data[0]
        } else {
          console.log("No hay registros!!");
        }
      });
  }

  public onChange(event: any, newDate: any): void {
    console.log("algo");
  }

  public onDate(event): void {
    console.log(event);
  }

  enviarDatos() {

    // Formato de fechas
    console.log("FechaInicio: ", this.fechaInicio);
    var s = ""
    if (Number((this.horaInicio).substring(0, 2)) > 12) {
      s = this.horaInicio.substring(0, 2) + "." + this.horaInicio.substring(3, 5) + " PM"
      var d = new Date(),
        parts = s.match(/(\d+)\.(\d+) (\w+)/),
        hours = /pm/i.test(parts[3]) ? parseInt(parts[1], 10) : parseInt(parts[1], 10) + 12,
        minutes = parseInt(parts[2], 10);
      d.setHours(hours);
      d.setMinutes(minutes);
    } else {
      var hora = Number((this.horaInicio).substring(0, 2))
      s = hora + "." + this.horaInicio.substring(3, 5) + " AM"
      var d = new Date(),
        parts = s.match(/(\d+)\.(\d+) (\w+)/),
        hours = /am/i.test(parts[3]) ? parseInt(parts[1], 10) : parseInt(parts[1], 10) + 12,
        minutes = parseInt(parts[2], 10);
      d.setHours(hours);
      d.setMinutes(minutes);
    }


    console.log("1: ", d);

    if (Number((this.horaFin).substring(0, 2)) > 12) {
      s = this.horaFin.substring(0, 2) + "." + this.horaFin.substring(3, 5) + " PM"
      var d2 = new Date(),
        parts = s.match(/(\d+)\.(\d+) (\w+)/),
        hours = /pm/i.test(parts[3]) ? parseInt(parts[1], 10) : parseInt(parts[1], 10) + 12,
        minutes = parseInt(parts[2], 10);
      d2.setHours(hours);
      d2.setMinutes(minutes);
    } else {
      var hora = Number((this.horaFin).substring(0, 2))
      s = hora + "." + this.horaFin.substring(3, 5) + " AM"
      var d2 = new Date(),
        parts = s.match(/(\d+)\.(\d+) (\w+)/),
        hours = /am/i.test(parts[3]) ? parseInt(parts[1], 10) : parseInt(parts[1], 10) + 12,
        minutes = parseInt(parts[2], 10);
      d2.setHours(hours);
      d2.setMinutes(minutes);
    }

    console.log("2: ", d2)
    /////////////////////////////////////////////////////////////////////////////////////////// Empleados
    var empleadoStruct = {
      "ROL_PK": 1,
      "CODUNIDAD": 2,
      "CODEMPLEADO": 3,
      "NOMBRE": this.nombre,
      "APELLIDO": this.apellido,
      "CEDULA": this.cedula,
      "CELULAR": this.telefono,
      "CORREO": this.correo
    }
    console.log(empleadoStruct);
    this.filarmonicaService.post(
      "/empleados", empleadoStruct
    ).subscribe((response) => {
      console.log(response);
    });


    /////////////////////////////////////////////////////////////////////////////////////////// Datos para enviar a otros componentes
    var datosCalendario = {
      "Inicio": d,
      "Fin": d2
    }
    this.calendarioService.setDatosCalendario(datosCalendario);
    /////////////////////////////////////////////////////////////////////////////////////////// consulta de actividades
    var idPeriodo = "1"
    var idActividad = "1"
    this.filarmonicaService.get(
      "/actividades/" + idPeriodo + "/" + idActividad
    ).subscribe((response) => {
      if (Object.keys(response).length === 0) { //No hay actividades
        this.calendarioService.setBoolCalendar(this.calendarBool);
      }
    });

  }

}
