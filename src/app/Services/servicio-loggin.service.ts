import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import {Configuracion, ConfiguracionLoggin} from './configServicio';



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
      this.url = ConfiguracionLoggin.url + ConfiguracionLoggin.wsProveedor + '/rest/';

  }
  ValidaLoggin(Usuario: string, Clave: string) {
    return this._http.post<any>(this.url + 'AccesoLoggin', {Usuario: Usuario, Clave: Clave}).pipe();
  }
}
