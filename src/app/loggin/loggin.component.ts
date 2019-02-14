import { Component, OnInit, Input, SimpleChanges, OnChanges, Output } from '@angular/core';
import {ServiceLoggin} from '../Services/servicio-loggin.service';
import {Router} from '@angular/router';
import {AuthService} from '../Services/auth.service';


@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css'],
  providers: [ServiceLoggin],
})

export class LogginComponent {
  title = 'my-tarea';
  @Input() Usuario: string;
  @Input() Clave: string;
  @Output() root: boolean;
  @Output() Toma: boolean;
  constructor( private service: ServiceLoggin, private route: Router, private auth: AuthService) {
   }
   fnIngresarLogin() {
    this.service.ValidaLoggin(this.Usuario, this.Clave).subscribe(
      result => {
        this.root = result;
        this.auth.setUser(this.Usuario, this.root);
        console.log('que imprime');
        console.log(this.root);
        if (!this.root) {
        alert('Contraseña incorrecta');
        }
        if (this.root) {
          this.route.navigate(['/reporte-toma']);
        }
      },
      error => {
         console.log(error); }
     );
}
}
