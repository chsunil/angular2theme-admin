import { Component,OnInit  } from '@angular/core';
//import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';
//import { films } from '../../assets/data/allusers';
import { Router, ActivatedRoute } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AlluserdatatableServices } from './alluserdatatable.service';
@Component({
 // selector: 'data-table-demo-3',
  templateUrl: 'allusers.component.html',
  //styleUrls: ['../../assets/css/data-table-demo3.css']
   providers:[AlluserdatatableServices]
})
export class AllusersComponent implements OnInit {

    alluserdataDetails: AlluserdataDetails[];
    cols: any[];
    selectedCar: AlluserdataDetails;
    dialogVisible: boolean;
     constructor(private carService: AlluserdatatableServices) { }

    ngOnInit() {
      this.getMyAlluserdataList();  
    }
    
   /* showCar(car: Car) {
        this.selectedCar = car;
        this.dialogVisible = true;
    }*/

    alluserdataDetailsa:Array< AlluserdataDetails> = [];
    errorMessage:string;

  /*  public columns:Array<any> = [
    {header: 'Video Name', field: 'username'},
    {header: 'Category',field: 'email'},
    {header: 'Uploaded Date', field: 'role'},
     {header: 'Uploaded Date', field: 'role'}
  ];*/

    getMyAlluserdataList() {
    this.carService.getMyAlluserdataList()
      .subscribe(
       alluserdataDetailsa => this. alluserdataDetailsa =  alluserdataDetailsa,
      error => this.errorMessage = <any>error);
  }
   
}
 export class AlluserdataDetails {
    public username: string;
    public email: string;
    public role: string;
    public action: string;
    public country: string;
    public totalfollows: string;
    public tshares:string;
    public tcomments:string;
}