import { Component, OnInit, Input } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { MovimientosService } from '../Services/movimientos.service';
import {Respuesta} from '../Model/Respuesta';

@Component({
  selector: 'app-cajero',
  templateUrl: './cajero.component.html',
  styleUrls: ['./cajero.component.css'],
  providers: [MovimientosService]
})
export class CajeroComponent {
title = 'my-tarea';
resultadoss: string;
@Input() accountNumber: string;
@Input() amount: number;

@Input() amount2: number; 
@Input() fromAccountNumber:string;
@Input() toAccountNumber: string;



constructor( private service: MovimientosService) {
 }
 fnDepositar() {
  this.service.Deposito(this.accountNumber,this.amount).subscribe(
    result => {
     
      this.resultadoss = result.response;
      console.log(this.resultadoss);
      if (!this.resultadoss) {
        alert('Error en el Servidor');
      }
    },
    error => {
       console.log(error);
       this.resultadoss="Ingrese Correctamente los datos!" }
   );
}
fnRetirar() {
  this.service.Retiro(this.accountNumber,this.amount).subscribe(
    result => {
     
      this.resultadoss = result.response;
      console.log(this.resultadoss);
      if (!this.resultadoss) {
        alert('Error en el Servidor');
      }
    },
    error => {
       console.log(error); 
      this.resultadoss="Ingrese Correctamente los datos!"}
   );
}
fnTranferecia() {

  
  this.service.Transaccion(this.amount2,this.fromAccountNumber,this.toAccountNumber).subscribe(
    result => {
     console.log(this.amount2+this.fromAccountNumber+this.toAccountNumber);
      this.resultadoss = result.response;
      console.log(this.resultadoss);
      if (!this.resultadoss) {
        alert('Error en el Servidor');
      }
    },
    error => {
       console.log(error); 
      this.resultadoss="Ingrese Correctamente los datos!"}
   );
}

}
