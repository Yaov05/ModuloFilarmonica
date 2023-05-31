import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule, MatFormField, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FilarmonicaService } from '../../services/filarmonica.service';

@Component({
  selector: 'app-calendario-form',
  templateUrl: './calendario-form.component.html',
  styleUrls: ['./calendario-form.component.css'],
})
export class CalendarioFormComponent implements OnInit {

  fechaInicio: Date;
  fechaFin: Date;
  horaInicio: string;
  horaFin: string;

  constructor(
    private filarmonicaService: FilarmonicaService,
  ) {

  }

  ngOnInit() {
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

    var struct = {
      "IDOBRA": 1,
      "IDTIPOCALEN": 2,
      "CONSECALENDARIO": 3,
      "IDESTADO": 3,
      "FECHAINICIO": d,
      "FECHAFIN": d2
    }

    this.filarmonicaService.post(
      "/calendarios", struct
    ).subscribe((response) => {

    });



  }



}
