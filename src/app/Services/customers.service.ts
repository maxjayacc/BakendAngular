import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';



import {ConfiguracionCsharp} from './configServicio';




@Injectable()
export class ServiceCustomer {
  public url: string;
  public headers = new HttpHeaders();
 
 
  constructor(private _http: HttpClient) {
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Authorization", "Bearer "+ localStorage.getItem("token"));
      this.url = ConfiguracionCsharp.url + ConfiguracionCsharp.wsProveedor + '/' ;
      console.log(localStorage.getItem("token"));
  }
  listadoCustomer() {
    
    return this._http.get<any>(this.url + "customers", {headers: this.headers})
                      .pipe(
                      );
  }
}
