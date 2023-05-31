import { Component, OnInit } from '@angular/core';
import { FilarmonicaService } from 'src/app/services/filarmonica.service';

export interface Asistencia {
  codigo: number;
  nombre: string;
  apellido: string;
  asistio?: boolean;
}

const ELEMENT_DATA: Asistencia[] = [];

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {

  obra: string;

  constructor(private filarmonicaservice: FilarmonicaService) { }

  ngOnInit() {
  }

  consultarObra() {
    this.filarmonicaservice
      .get(
        "/obras/"
      )
      .subscribe((data: any) => {
        if (Object.keys(data[0]).length !== 0) {
          this.obra = data[0].id;
        } else {
          console.log("No hay registros!!");
        }
      });
  }

  obtenerAsistencia() {
    this.filarmonicaservice.get(
      "/participaciones/lista/" + this.obra
    ).subscribe((response) => {
      if (Object.keys(response[0]).length !== 0) {
        for (var i = 0; i < Object.keys(response[0]).length; i++) {
          ELEMENT_DATA.push({
            codigo: response[0].codigo,
            nombre: response[0].nombre,
            apellido: response[0].apellido
          });
        }
      }
    });
  }

  checkAllCheckBox(ev: any) {
    // this.posts.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    
  }

}
