import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { ServiceCustomer } from '../Services/customers.service';
import {Customer} from '../Model/customer';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css'],
  providers: [ServiceCustomer],
})
export class TransaccionComponent  {
  title = 'my-tarea';
  customers: Customer[];

  constructor( private service: ServiceCustomer) {
   }
   fnListarCustomer() {
     
    this.service.listadoCustomer().subscribe(
      result => {
       
        this.customers = result;
        console.log(this.customers);
        if (!this.customers) {
          alert('Error en el Servidor');
        }
      },
      error => {
         console.log(error); }
     );
  }
}
