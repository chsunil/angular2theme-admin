import { ViewChild,Component } from '@angular/core';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';
import { films } from '../../assets/data/allusers';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'data-table-demo-3',
  templateUrl: 'allusers.component.html',
  styleUrls: ['../../assets/css/data-table-demo3.css']
})
export class AllusersComponent {

 filmResource = new DataTableResource(films);
    films = [];
    filmCount = 0;

    @ViewChild(DataTable) filmsTable;
    constructor(private router:Router) {
        this.filmResource.count().then(count => this.filmCount = count);
    }

    reloadFilms(params) {
        this.filmResource.query(params).then(films => this.films = films);
    }
    adduserpage()
  {
      
    alert("work");
   this.router.navigate(['/adduser']);

  }

    cellColor(car) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7)/1.3)*100)) + ')';
    };

    // special params:

    translations = <DataTableTranslations>{
        indexColumn: 'Index column',
        expandColumn: 'Expand column',
        selectColumn: 'Select column',
        paginationLimit: 'Max results',
        paginationRange: 'Result range'
    };


}
