import { NgModule} from '@angular/core';

import { AllusersComponent } from './allusers.component';
import { AdduserComponent } from './adduser.component';
import { UsersRoutingModule } from './users-routing.module';
import { DataTableModule } from 'angular-2-data-table';

@NgModule({
  imports: [ UsersRoutingModule,DataTableModule ],
  declarations: [
    AllusersComponent,
    AdduserComponent,
  ]
})
export class UsersModule { }