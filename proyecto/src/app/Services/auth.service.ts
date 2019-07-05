import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { ConfiguracionJava} from './configServicio';
import { USE_VALUE } from '@angular/core/src/di/injector';
import { Loggin} from '../Model/Usuario'



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url: string;
  public token: string;
  constructor(private _http: HttpClient) {
  this.url = ConfiguracionJava.url + ConfiguracionJava.wsProveedor;
  

   }
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
    });


    setToken(datos: string, valor: boolean): void {
      const user_string1 = valor;
      if (user_string1) {
        localStorage.setItem('token', datos);
      }
    }
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
