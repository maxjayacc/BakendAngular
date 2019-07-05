import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {ConfiguracionCsharp} from './configServicio';
import {tap} from 'rxjs/operators/';





const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class ServiceLoggin {
  public url: string;
  valor: boolean;
  constructor(private _http: HttpClient) {
      this.url = ConfiguracionCsharp.url + ConfiguracionCsharp.wsProveedor;

  }
    
  ValidaLoggin(Name: string, Password: string) {
    return this._http.post<any>(this.url + '/auth/login', {Name: Name, Password: Password}).pipe();
  }
}
