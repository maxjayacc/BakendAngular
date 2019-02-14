import { Component, OnInit, Input } from '@angular/core';
import {ServiceProveedor} from '../Services/servicio-proveedor.service';
import {Proveedor} from '../Model/Proveedor';

@Component({
  selector: 'app-reporte-toma',
  templateUrl: './reporte-toma.component.html',
  styleUrls: ['./reporte-toma.component.css'],
  providers: [ServiceProveedor],
})
export class ReporteTomaComponent {
  title = 'my-tarea';
  provedores: Proveedor[];
  @Input() nicho: string;
  @Input() usuario: string;
  @Input() variable: number;
  suma: number;
  suma1: number;
  suma2: number;
  pageActual = 1;
  Loggin: boolean;
  constructor( private service: ServiceProveedor) {
   }

   fnListarProveedor() {
    this.service.listadoProveedor(this.nicho, this.usuario).subscribe(
      result => {
        console.log('hola');
       this.provedores = result;
        if (!this.provedores) {
        alert('Error en el Servidor');
        }
      },
      error => {
         console.log(error); }
     );
  }
  mover() {
      this.service.listadoProveedor(this.nicho, this.usuario).subscribe(
      result => {
      this.provedores = result;
      console.log('ffff');
      this.suma = 0;
      this.suma1 = 0;
      this.suma2 = 0;
      for (const qqq of this.provedores) {
      // console.log(qqq.cantidad_tomadaok);
      this.suma = this.suma + qqq.cantidad_tomadaok;
      this.suma1 = this.suma1 + qqq.cantidad_tomadaErronea;
      this.suma2 = this.suma2 + qqq.cantidad_tomadaTOTAL;
        // console.log(this.suma);
    }
    console.log(this.suma);
  });
}
fnloggin() {
  this.Loggin = true;
}

}
