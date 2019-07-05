

import {Component, Directive, Input, ViewChild, OnInit, ElementRef} from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-grafico-chart',
  templateUrl: './grafico-chart.component.html',
  styleUrls: ['./grafico-chart.component.css']
})
export class GraficoChartComponent implements OnInit {

    chart: any = [];
    @ViewChild('myObj', { read: ElementRef }) myObj: ElementRef;

    ngOnInit(): void {

    console.log('hola');
    console.log(this.myObj.nativeElement.id);

    const canv: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById(this.myObj.nativeElement.id);
    const ctx: CanvasRenderingContext2D = canv.getContext('2d');

    this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Ventas',
            backgroundColor: [
              '#FF6384',
              '#63FF84',
              '#84FF63',
              '#8463FF',
              '#6384FF',
              '#8563FF',
              '#6364FF',
          ],
            borderColor: 'rgb(030, 030, 030)',
            data: [12, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {}
});

  }

}
