import { Component, OnInit } from '@angular/core';
import { GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {


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



  constructor() { }

  ngOnInit(): void {
  };

  onGridReady(params: GridReadyEvent) {

  };
}
