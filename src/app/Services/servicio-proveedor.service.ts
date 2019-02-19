import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import {Configuracion} from './configServicio';
import { Proveedor } from '../Model/Proveedor';
import { Piso } from '../Model/Piso';
import { Nicho } from '../Model/Nicho';
import { NichoDetalle } from '../Model/NichoDetalle';


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
  listadoPisos(almacen: string) {
    console.log('estoy en servicio');
    return this._http.get<Piso[]>(this.url + 'GetPisos/' + almacen)
                      .pipe(
                      );
  }
  listadoNichos(almacen: string, codigoPiso: string) {
    console.log('estoy en servicio nichos');
    return this._http.get<Nicho[]>(this.url + 'GetStockPorNivel/' + almacen + '/' + codigoPiso)
                      .pipe(
                      );
  }
   NichoDetalle(almacen: string, nivel: string,
    descripcionUbicacion: string, nichonumero: string) {
    console.log(almacen, nivel, descripcionUbicacion, nichonumero);

    return  this._http.get<NichoDetalle[]>(this.url + 'GetStockPorNicho/'
    + almacen + '/' + nivel + '/' + descripcionUbicacion + '/' + nichonumero).toPromise();
  }
}
