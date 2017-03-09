import { ViewChild,Component,OnInit } from '@angular/core';
//import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';
//import { films } from '../../assets/data/allvideos';
import { DatatableService } from './allvideosdatatable.service';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  //selector: 'data-table-demo-3',
  templateUrl: 'allvideos.component.html',
  //styleUrls: ['../../assets/css/data-table-demo3.css']
  providers:[DatatableService]
})
export class AllvideosComponent implements OnInit {

    allvideoDetails: AllvideoDetails[];
    
    cols: any[];
    
    selectedCar: AllvideoDetails;
    
    dialogVisible: boolean;
    

    constructor(private carService: DatatableService) { }

    ngOnInit() {
      this.getVideoDetails();  
    }
    
   /* showCar(car: Car) {
        this.selectedCar = car;
        this.dialogVisible = true;
    }*/

   // allvideoDetails:Array<AllvideoDetails> = [];
    errorMessage:string;

    public columns:Array<any> = [
    {header: 'Video Title', field: 'username'},
    {header: 'user',field: 'email'},
    {header: 'date', field: 'role'},
     {header: 'action', field: 'role'}
  ];

    getVideoDetails() {
    this.carService.getMyVideosList("")
      .subscribe(
      allvideoDetails => this.allvideoDetails = allvideoDetails,
      error => this.errorMessage = <any>error);
  }
   
}
 export class AllvideoDetails {
    public videotitle: string;
    public user: string;
    public date: string;
    public action: string;
    public follows: string;
    public shares:string;
    public comments:string;
}