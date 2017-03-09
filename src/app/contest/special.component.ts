import { Component,OnInit  } from '@angular/core';
//import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';
//import { films } from '../../assets/data/specialcontest';
import { SpecialdatatableServices} from './specialdatatable.services';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  //selector: 'data-table-demo-3',
  templateUrl: 'special.component.html',
  //styleUrls: ['../../assets/css/data-table-demo3.css']
     providers:[SpecialdatatableServices]
})
export class SpecialComponent implements OnInit {

   spcontest: SpcontestDetails[];
    
    cols: any[];
    
    selectedCar: SpcontestDetails;
    
    dialogVisible: boolean;
    

    constructor(private carService: SpecialdatatableServices) { }

    ngOnInit() {
      this.getMySpcontestList();  
    }
    
   /* showCar(car: Car) {
        this.selectedCar = car;
        this.dialogVisible = true;
    }*/

     //spcontest:Array< SpcontestDetails> = [];
    errorMessage:string;

  /*  public columns:Array<any> = [
    {header: 'Video Name', field: 'username'},
    {header: 'Category',field: 'email'},
    {header: 'Uploaded Date', field: 'role'},
     {header: 'Uploaded Date', field: 'role'}
  ];*/

    getMySpcontestList() {
    this.carService.getMySpcontestList()
      .subscribe(
      spcontest => this.spcontest = spcontest,
      error => this.errorMessage = <any>error);
  }
   
}
 export class SpcontestDetails {
   public conteststatus: string;
    public contestname: string;
    public contestduration: string;
    public action: string;
    public contestcategories: string;
}