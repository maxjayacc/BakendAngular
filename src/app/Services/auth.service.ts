import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import {Configuracion, ConfiguracionLoggin} from './configServicio';
import { USE_VALUE } from '@angular/core/src/di/injector';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url: string;
  constructor(private _http: HttpClient) {
  this.url = ConfiguracionLoggin.url + ConfiguracionLoggin.wsProveedor + '/rest/';

   }
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
    });

  setUser(Usuario: string , valor: boolean): void {
    const user_string = valor;
    if (user_string) {
      localStorage.setItem('currentUser', Usuario);
    }
  }
  getCurrenUser() {
  const g = localStorage.getItem('currentUser');
  if (!isNullOrUndefined(g)) {
  const Usuario = (g);
  return Usuario;
} else {
    return null;
  }
}
  logoutUser() {
    localStorage.removeItem('currentUser');
  }
}
