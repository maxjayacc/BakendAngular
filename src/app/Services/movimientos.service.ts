import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ConfiguracionCloud} from './configServicio';

@Injectable()
export class MovimientosService {
  
  public url: string;
 
  constructor(private _http: HttpClient) {

    this.url = ConfiguracionCloud.url + ConfiguracionCloud.wsProveedor + '/' ;
     
    console.log(this.url);

  }
  Deposito(accountNumber: string, amount: number) {
    
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '  + JSON.parse(localStorage.getItem('token'))
      

   });
   console.log(localStorage.getItem("token"));
   return this._http.post<any>(this.url + 'transactions/transfer_deposit', {accountNumber: accountNumber, amount: amount},{ headers: reqHeader } ).pipe();

  }



  Retiro(accountNumber: string, amount: number) {
    
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '  + JSON.parse(localStorage.getItem('token'))
      

   });
   console.log(localStorage.getItem("token"));
   return this._http.post<any>(this.url + 'transactions/transfer_withdraw', {accountNumber: accountNumber, amount: amount},{ headers: reqHeader } ).pipe();

  }

 


  Transaccion(amount2: number, fromAccountNumber: string,toAccountNumber: string ) {
    
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '  + JSON.parse(localStorage.getItem('token'))
      

   });
   console.log(localStorage.getItem("token"));
   return this._http.post<any>(this.url + 'transactions/transfer', {amount2: amount2, fromAccountNumber: fromAccountNumber, toAccountNumber: toAccountNumber},{ headers: reqHeader } ).pipe();

  }
}
