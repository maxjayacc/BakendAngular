import { Component, Inject, OnInit, Input } from '@angular/core';
import { ServiceProveedor} from '../Services/servicio-proveedor.service';
import { Piso} from '../Model/Piso';
import { Nicho} from '../Model/Nicho';
import { NichoDetalle} from '../Model/NichoDetalle';
import { stringify } from 'querystring';
import { HomeComponent } from '../home/home.component';
import { ComponenteTareaComponent } from '../componente-tarea/componente-tarea.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



export interface DialogData {
  enviarData: Array<NichoDetalle>;
}

@Component({
  selector: 'app-almacen-matriz',
  templateUrl: './almacen-matriz.component.html',
  styleUrls: ['./almacen-matriz.component.css'],
  providers: [ServiceProveedor],
})
export class AlmacenMatrizComponent {
  constructor(private service: ServiceProveedor, public dialog: MatDialog ) { }
  numeros: number[] = [1, 2, 3, 4, 5 , 6, 7];
  letras: string[] ;
  temporal: string[] ;
  @Input() almacen: string;
  @Input() codigoPiso: string;
  @Input() descripcionUbicacion: string;
  @Input() nichonumero: string;
  pisos: Piso[];
  nichos: Nicho[];
  nichodetalles: NichoDetalle[];
  i: number;
  valor1: boolean;
  private bodyText: string;


  ListarPisos() {
    this.emitirSonido();
    this.service.listadoPisos(this.almacen).subscribe(
    result => {
    this.pisos = result;
    console.log('ffff');
});

  }
  async openDialog(letra: string, numero: string ) {
    this.descripcionUbicacion = letra;
    this.nichonumero =  numero;
    await this.DetalleNicho();
    console.log(this.nichodetalles);

    await this.dialog.open(DialogDataExampleDialogComponent, {

      data: {
        enviarData: this.nichodetalles
      }
    });
  }


 ListarNichos() {
  this.service.listadoNichos(this.almacen, this.codigoPiso).subscribe(
  result => {
    this.nichos = result;
  console.log('ffff');

  this.i = 0;
  this.letras = [];
  for (const nich of this.nichos) {
    this.letras.push(nich.DescripcionUbicacion);
  }
  console.log(this.letras);
  this.letras = this.letras.filter((valor, indiceactual, arreglo) => arreglo.indexOf(valor) === indiceactual );
  console.log(this.letras);
});
}

  async DetalleNicho() {
  await  this.service.NichoDetalle( this.almacen,  this.codigoPiso, this.descripcionUbicacion,
  this.nichonumero).then(
  result => {
    this.nichodetalles = result;
    console.log(this.nichodetalles);
} ) ;
}
emitirSonido() {
  const sonido = new Audio();
  sonido.src = 'pitido.mp3';
  sonido.play();
}
}



@Component({
  selector: 'app-almacen',
  templateUrl: './almacen-matriz-nuevo.component.html',
  providers: []
})
export class DialogDataExampleDialogComponent {

  constructor(public dialogRef: MatDialogRef<DialogDataExampleDialogComponent> , @Inject(MAT_DIALOG_DATA) public data: DialogData) {}


onNoClick(): void {
  this.dialogRef.close();
}



}
