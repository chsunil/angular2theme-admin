import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';
import { ForgotpasswordComponent } from './forgotpassword.component';
import { PasswordchangeComponent } from './passwordchange.component';
import { InvitefriendsComponent } from './invitefriends.component';
import { UpdateprofileComponent } from './updateprofile.component';
import { VideoflagComponent } from './videoflag.component';

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
          title: 'register'
        }
      },
      {
        path: 'forgotpassword',
        component: ForgotpasswordComponent,
        data: {
          title: 'forgotpassword'
        }
      },
      {
        path: 'passwordchange',
        component: PasswordchangeComponent,
        data: {
          title: 'passwordchange'
        }
      },
      {
        path: 'invitefriends',
        component: InvitefriendsComponent,
        data: {
          title: 'invitefriends'
        }
      },
      {
        path: 'updateprofile',
        component: UpdateprofileComponent,
        data: {
          title: 'updateprofile'
        }
      },
      {
        path: 'videoflag',
        component: VideoflagComponent,
        data: {
          title: 'videoflag'
        }
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
