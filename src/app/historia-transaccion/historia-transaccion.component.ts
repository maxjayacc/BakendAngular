import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { HistorialService } from '../Services/historial.service';
import {HistorialTransaccion} from '../Model/HistorialTransaccion';

@Component({
  selector: 'app-historia-transaccion',
  templateUrl: './historia-transaccion.component.html',
  styleUrls: ['./historia-transaccion.component.css'],
  providers: [HistorialService],
})
export class HistoriaTransaccionComponent{

title = 'my-tarea';
historials: HistorialTransaccion[];


constructor( private service: HistorialService) {
 }
 fnListarHistoria() {
  const page=0;
  const pageSize=100;
  this.service.ListarHistoria(page,pageSize).subscribe(
    result => {
     
      this.historials = result.data;
      console.log(this.historials);
      if (!this.historials) {
        alert('Error en el Servidor');
      }
    },
    error => {
       console.log(error); }
   );
}
}
