import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ConfiguracionLoggin} from './configServicio';
import { VentasDiarias } from '../Model/VentasDiarias';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class ServicioVentasService {
  public url: string;
  constructor(private _http: HttpClient) {
  this.url = ConfiguracionLoggin.url + ConfiguracionLoggin.wsProveedor + '/rest/';
  }
  listadoVentasDiarias() {
    console.log(this.url + 'GetVentasDiarias');
    return this._http.get<VentasDiarias[]>(this.url + 'GetVentasDiarias')
                      .pipe(
                      );
  }

}
