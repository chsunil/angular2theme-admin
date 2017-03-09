import { NgModule } from '@angular/core';
// Modal Component
import { ModalModule } from 'ng2-bootstrap/modal';
import { AllusersComponent } from './allusers.component';
import { AdduserComponent } from './adduser.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserrolesComponent } from './userroles.component';
import {HttpModule, Http} from '@angular/http';
//import { DataTableModule } from 'angular-2-data-table';
import {Button, DataTableModule,Footer, Column} from "../../custommodules/primeng/primeng";

@NgModule({
  imports: [
    UsersRoutingModule,
    ModalModule.forRoot(),
    DataTableModule
  ],
  declarations: [
    AllusersComponent,
    AdduserComponent,
    UserrolesComponent
  ]
})
export class UsersModule { }
