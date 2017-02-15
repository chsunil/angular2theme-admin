import { NgModule } from '@angular/core';

import { AllusersComponent } from './allusers.component';
 import { AdduserComponent } from './adduser.component';

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [ UsersRoutingModule ],
  declarations: [
    AllusersComponent,
    AdduserComponent,
  ]
})
export class UsersModule { }
