import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DataApi } from '../data-api';
import { CommonModule } from '@angular/common';
import Highcharts from 'highcharts/esm/highcharts';

@Component({
  selector: 'app-graph1',
  imports: [CommonModule],
  templateUrl: './graph1.html',
  styleUrl: './graph1.css'
})
export class Graph1 implements AfterViewInit {

  constructor(private api: DataApi) {}

  ngAfterViewInit() {

    this.api.getChartData().subscribe({
      next: (data) => {
        const categories = data.map((d) => d.name);
        const values = data.map((d) => d.value);

        (window as any).Highcharts.chart('chartContainer', {
          chart: { type: 'column' },
          title: { text: 'API Data Chart' },
          xAxis: { categories },
          yAxis: {
            min: 0,
            title: { text: 'Value' },
          },
          series: [
            {
              name: 'Items',
              data: values,
            },
          ],
          credits: { enabled: false },
        });
      },
      error: (err) => {
        console.error('Error fetching chart data', err);
      },
    });
  }
}