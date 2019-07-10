import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './componente/app.component';
import { ComponenteTareaComponent } from './componente-tarea/componente-tarea.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { LogginComponent } from './loggin/loggin.component';
import { HomeComponent } from './home/home.component';
import { CalimodComponent } from './calimod/calimod.component';
import { MatDialogModule} from '@angular/material/dialog';
import { GraficoChartComponent } from './grafico-chart/grafico-chart.component';
import { TransaccionComponent } from './transaccion/transaccion.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HistoriaTransaccionComponent } from './historia-transaccion/historia-transaccion.component';
import { CajeroComponent } from './cajero/cajero.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponenteTareaComponent,
    LogginComponent,
    HomeComponent,
    CalimodComponent,
    GraficoChartComponent,
    TransaccionComponent,
    UsuarioComponent,
    HistoriaTransaccionComponent,
    CajeroComponent,



  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    AngularFontAwesomeModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatNativeDateModule,



  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
