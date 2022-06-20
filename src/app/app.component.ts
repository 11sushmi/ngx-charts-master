import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { multi, single } from './data';
import { GridReadyEvent } from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


@Component({
  selector: 'app-root',
  providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../node_modules/@swimlane/ngx-ui/index.css', './app.component.scss'],
  templateUrl: './app.component.html'
})


export class AppComponent implements OnInit {

  single: any[];
  view: any[] = [700, 400];
  multi: any[];
  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Population';
  legendTitle: string = 'Years';
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#232837';
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  timeline: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  legend: boolean = true;


  

  gridOptions = {
    columnDefs: [
      { headerName: "First Name", field: "firstName" },
      { headerName: "Last Name", field: "lastName" },
      { headerName: "Email", field: "email" },
      { headerName: "Mobile", field: "mobile" },
      { headerName: "Address", field: "address" }
    ],
    headerHeight: 35,
    enableFilter: true,
    enableSorting: true,
    enableColResize: true,
    pagination: true,
    suppressDragLeaveHidesColumns: true,
    paginationPageSize: 20,
    showNoRowsOverlay: false,
   // overlayNoRowsTemplate: '<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">No User Available</span>',
    domLayout: 'autoHeight',
    animateRows: true,
  }

  rowData = [
    { firstName: "Test", lastName: "Test", email: "Test", mobile: "Test", address: "Test" },
    { firstName: "Test", lastName: "Test", email: "Test", mobile: "Test", address: "Test" },
    { firstName: "Test", lastName: "Test", email: "Test", mobile: "Test", address: "Test" },
    { firstName: "Test", lastName: "Test", email: "Test", mobile: "Test", address: "Test" },
    { firstName: "Test", lastName: "Test", email: "Test", mobile: "Test", address: "Test" },
    { firstName: "Test", lastName: "Test", email: "Test", mobile: "Test", address: "Test" },
    { firstName: "Test", lastName: "Test", email: "Test", mobile: "Test", address: "Test" },
    { firstName: "Test", lastName: "Test", email: "Test", mobile: "Test", address: "Test" },
    { firstName: "Test", lastName: "Test", email: "Test", mobile: "Test", address: "Test" },
    { firstName: "Test", lastName: "Test", email: "Test", mobile: "Test", address: "Test" },
    { firstName: "Test", lastName: "Test", email: "Test", mobile: "Test", address: "Test" },
    { firstName: "Test", lastName: "Test", email: "Test", mobile: "Test", address: "Test" },
    { firstName: "Test", lastName: "Test", email: "Test", mobile: "Test", address: "Test" }
  ];



  constructor() {
    Object.assign(this, { single });
    Object.assign(this, { multi });
  }

  ngOnInit(): void {
    
  }


  onGridReady(params: GridReadyEvent) {

  };
  
}
