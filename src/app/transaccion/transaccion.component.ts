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
    const page=0;
    const pageSize=100;
    this.service.listadoCustomer(page,pageSize).subscribe(
      result => {
       
        this.customers = result.data;
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
