import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogginComponent} from './loggin/loggin.component';
import {ComponenteTareaComponent} from './componente-tarea/componente-tarea.component';
import {AppComponent} from './componente/app.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './guards/auth.guard';
import {CalimodComponent} from './calimod/calimod.component';
import {GraficoChartComponent} from './grafico-chart/grafico-chart.component';


const routes: Routes = [
{ path: 'calimod', component: CalimodComponent},
{ path: 'loggin', component: LogginComponent},
{ path: 'componente-tarea', component: ComponenteTareaComponent},
{ path: 'grafico-chart', component: GraficoChartComponent, canActivate: [AuthGuard]},
{ path: '**', component: LogginComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
