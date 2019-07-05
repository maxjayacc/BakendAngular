import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ConfiguracionJava} from './configServicio';



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
  this.url = ConfiguracionJava.url + ConfiguracionJava.wsProveedor + '/rest/';
  }
  

}
