import { Component, OnInit } from '@angular/core';
import { FilarmonicaService } from 'src/app/services/filarmonica.service';
import { CalendarioService } from 'src/app/services/calendario.service';

export interface Liquidacion {
  // codigo: number;
  // nombre: string;
  // apellido: string;
  // facultad: string;
  // proyecto: string;
  // instrumento: string;
}

const ELEMENT_DATA: Liquidacion[] = [];

@Component({
  selector: 'app-liquidacion',
  templateUrl: './liquidacion.component.html',
  styleUrls: ['./liquidacion.component.css']
})
export class LiquidacionComponent implements OnInit {

  dataSource = ELEMENT_DATA;

  constructor(private filarmonicaService: FilarmonicaService, private calendarioService: CalendarioService) { }

  ngOnInit() {

  }

  consultaViaticos() {  /////Lista de estudiantes con horas asistidas
    this.filarmonicaService.get(
      "/estudiantes/"
    ).subscribe((response) => {
      if (Object.keys(response[0]).length !== 0) {
        for (var i = 0; i < Object.keys(response[0]).length; i++) {
          ELEMENT_DATA.push({
            // codigo: response[0].codigo,
            // nombre: response[0].nombre,
            // apellido: response[0].apellido,
            // facultad: response[0].facultad,
            // proyecto: response[0].proyecto,
            // instrumento: response[0].instrumento
          })
        }
      }
    });
  }


}
