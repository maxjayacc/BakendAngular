import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-almacen-matriz',
  templateUrl: './almacen-matriz.component.html',
  styleUrls: ['./almacen-matriz.component.css']
})
export class AlmacenMatrizComponent implements OnInit {
    botones: any = [
    {etiqueta: 'Boton Uno', pagina: 'HomePage', valor: 1},
    {etiqueta: 'Boton Dos', pagina: 'UsersPage', valor: 2}
  ];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

    goTo (pagina) {
       this.navCtrl.navigateRoot(pagina);
    }
}
