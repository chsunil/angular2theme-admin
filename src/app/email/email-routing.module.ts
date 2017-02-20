import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';
import { ForgotpasswordComponent } from './forgotpassword.component';
import { PasswordchangeComponent } from './passwordchange.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Email Templates'
    },
    children: [
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Register Email'
        }
      },
      {
        path: 'forgotassword',
        component: ForgotpasswordComponent,
        data: {
          title: 'ForgotpasswordComponent Email'
        }
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule {}
