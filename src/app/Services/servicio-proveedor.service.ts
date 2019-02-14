import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import {Configuracion} from './configServicio';
import { Proveedor } from '../Model/Proveedor';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class ServiceProveedor {
  public url: string;
  constructor(private _http: HttpClient) {
      this.url = Configuracion.url + Configuracion.wsProveedor + '/rest/';
  }
  listadoProveedor(nicho: string, usuario: string) {
    console.log(this.url + 'GetTomasTotalesConTiempo/' + nicho + '/' + usuario);
    return this._http.get<Proveedor[]>(this.url + 'GetTomasTotalesConTiempo/' + nicho + '/' + usuario)
                      .pipe(
                      );
  }
}
