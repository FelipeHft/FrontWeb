import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-donut',
  templateUrl: './chart-donut.component.html',
  styleUrls: ['./chart-donut.component.css']
})
export class ChartDonutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() pieChartLabels:string[];
  @Input() pieChartData:number[];
  public pieChartType:string = 'pie';

}
