import { Component, OnInit, Input } from '@angular/core';
import { ServicioUsuario } from '../Services/usuario.service';
import { Cuenta } from '../Model/Cuenta';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [ServicioUsuario],
})
export class UsuarioComponent  {
  @Input() Id: string;
  title = 'my-tarea';
  cuentas: Cuenta[];

  constructor( private service: ServicioUsuario) {
   }
   fnListarUsers() {
     
    this.service.listadoUsuario(this.Id).subscribe(
      result => {
        console.log(this.Id);
        this.cuentas = result.id;
        this.cuentas = result.name;
        console.log(this.cuentas);
        if (!this.cuentas) {
          alert('Error en el Servidor');
        }
      },
      error => {
         console.log(error); }
     );
  }
}
