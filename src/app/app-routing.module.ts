import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogginComponent} from './loggin/loggin.component';
import {ComponenteTareaComponent} from './componente-tarea/componente-tarea.component';
import {AppComponent} from './componente/app.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './guards/auth.guard';
import {CalimodComponent} from './calimod/calimod.component';
import {GraficoChartComponent} from './grafico-chart/grafico-chart.component';
import { TransaccionComponent } from './transaccion/transaccion.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HistoriaTransaccionComponent } from './historia-transaccion/historia-transaccion.component';
import { CajeroComponent } from './cajero/cajero.component';


const routes: Routes = [
{ path: 'calimod', component: CalimodComponent},
{ path: 'transaccion', component: TransaccionComponent,canActivate: [AuthGuard]},
{ path: 'historia-transaccion', component: HistoriaTransaccionComponent,canActivate: [AuthGuard]},
{ path: 'cajero', component: CajeroComponent,canActivate: [AuthGuard]},
{ path: 'usuario', component: UsuarioComponent,canActivate: [AuthGuard]},
{ path: 'loggin', component: LogginComponent},
{ path: 'componente-tarea', component: ComponenteTareaComponent},
{ path: 'grafico-chart', component: GraficoChartComponent, canActivate: [AuthGuard]},
{ path: '**', component: CalimodComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
