import { Component,OnInit  } from '@angular/core';
//import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';
//import { films } from '../../assets/data/maincontest';
import { Router, ActivatedRoute } from '@angular/router';
import { DatatableService } from './contestdatatable.services';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  //selector: 'data-table-demo-3',
  templateUrl: 'main.component.html',
  //styleUrls: ['../../assets/css/data-table-demo3.css']
  providers:[DatatableService]
})
export class MainComponent implements OnInit {

    maincontestDetails: MaincontestDetails[];
    
    cols: any[];
    
    selectedCar: MaincontestDetails;
    
    dialogVisible: boolean;
    

    constructor(private carService: DatatableService) { }

    ngOnInit() {
      this.getMyMaincontestList();  
    }
    
   /* showCar(car: Car) {
        this.selectedCar = car;
        this.dialogVisible = true;
    }*/

    MaincontestDetails:Array< MaincontestDetails> = [];
    errorMessage:string;

    /*-public columns:Array<any> = [
    {header: 'Video Name', field: 'username'},
    {header: 'Category',field: 'email'},
    {header: 'Uploaded Date', field: 'role'},
     {header: 'Uploaded Date', field: 'role'}
  ];*/

    getMyMaincontestList() {
    this.carService.getMyMaincontestList()
      .subscribe(
      maincontestDetails => {
        this.maincontestDetails = maincontestDetails},
      error => this.errorMessage = <any>error);
  }
   
}
 export class MaincontestDetails {
    public conteststatus: string;
    public contestname: string;
    public contestduration: string;
    public action: string;
    public contestcategories: string;
    
}
