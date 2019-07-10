import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfiguracionCloud} from './configServicio';

@Injectable()
export class HistorialService {
  public url: string;
 
  constructor(private _http: HttpClient) {

    this.url = ConfiguracionCloud.url + ConfiguracionCloud.wsProveedor + '/' ;
     
    console.log(this.url);

  }
  ListarHistoria(page: number, pageSize: number) {
    
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '  + JSON.parse(localStorage.getItem('token'))
      

   });
   console.log(localStorage.getItem("token"));
    return this._http.get<any>(this.url + "history_transactions/all?page=0&pageSize=100", { headers: reqHeader })
                      .pipe(
                      );
  }
}
