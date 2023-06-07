import { Component, OnInit } from '@angular/core';
import { FilarmonicaService } from 'src/app/services/filarmonica.service';
import { CalendarioService } from 'src/app/services/calendario.service';
// import {} from '@types/bootstrap-datepicker';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

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
  selectBool: boolean;
  asisBool: boolean;
  liquidBool: boolean;

  constructor(
    private filarmonicaService: FilarmonicaService,
    private calendarioService: CalendarioService
  ) { }

  ngOnInit() {

    this.calendarioService.calendarChange$.subscribe(value => this.calendarBool = value);

    this.calendarBool = true;
    this.selectBool = true;
    this.asisBool = true;
    this.liquidBool = true;

    // this.fechaInicio = new Date();
    // this.fechaFin = new Date();
  }

  setBool() {
    console.log(this.calendarBool);
    this.calendarioService.setBoolCalendar(this.calendarBool);
  }

}
