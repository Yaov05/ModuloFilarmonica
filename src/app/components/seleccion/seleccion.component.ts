import { Component, OnInit } from '@angular/core';
import { FilarmonicaService } from 'src/app/services/filarmonica.service';

export interface Seleccion {
  codigo: number;
  nombre: string;
  apellido: string;
  facultad: string;
  proyecto: string;
  instrumento: string;
}

const ELEMENT_DATA: Seleccion[] = [];

// const ELEMENT_DATA: Seleccion[] = [
//   { codigo: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];


@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit {


  constructor(private filarmonicaService: FilarmonicaService) { }

  ngOnInit() {
  }

  public consultaSeleccion() {
    var idInstrumento = ""
    this.filarmonicaService.get(
      "estudiantes/instrumento/" + idInstrumento
    ).subscribe((response) => {
      if (Object.keys(response[0]).length !== 0) {
        for (var i = 0; i < Object.keys(response[0]).length; i++) {
          ELEMENT_DATA.push({
            codigo: response[0].codigo,
            nombre: response[0].nombre,
            apellido: response[0].apellido,
            facultad: response[0].facultad,
            proyecto: response[0].proyecto,
            instrumento: response[0].instrumento
          })
        }
      }
    });
  }

}
