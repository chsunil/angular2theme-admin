import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllusersComponent } from './allusers.component';
import { AdduserComponent } from './adduser.component';
import { UserrolesComponent } from './userroles.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'User Pages'
    },
    children: [
      {
        path: 'allusers',
        component: AllusersComponent,
        data: {
          title: 'All Users'
        }
      },
      {
        path: 'adduser',
        component: AdduserComponent,
        data: {
          title: 'Add Users'
        }
      },
      {
        path: 'userroles',
        component: UserrolesComponent,
        data: {
          title: 'User Roles'
        }
      }    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
