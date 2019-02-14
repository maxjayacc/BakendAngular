import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './componente/app.component';
import { ComponenteTareaComponent } from './componente-tarea/componente-tarea.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { LogginComponent } from './loggin/loggin.component';
import { ReporteTomaComponent } from './reporte-toma/reporte-toma.component';
import { HomeComponent } from './home/home.component';
import { CalimodComponent } from './calimod/calimod.component';
import { AlmacenMatrizComponent } from './almacen-matriz/almacen-matriz.component';



@NgModule({
  declarations: [
    AppComponent,
    ComponenteTareaComponent,
    LogginComponent,
    ReporteTomaComponent,
    HomeComponent,
    CalimodComponent,
    AlmacenMatrizComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
