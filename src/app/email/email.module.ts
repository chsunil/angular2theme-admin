import { NgModule } from '@angular/core';

import { RegisterComponent } from './register.component';
import { ForgotpasswordComponent } from './forgotpassword.component';
import { PasswordchangeComponent } from './passwordchange.component';
import { InvitefriendsComponent } from './invitefriends.component';
import { UpdateprofileComponent } from './updateprofile.component';
import { VideoflagComponent } from './videoflag.component';

import { EmailRoutingModule } from './email-routing.module';

@NgModule({
  imports: [EmailRoutingModule],
  declarations: [
    RegisterComponent,
    ForgotpasswordComponent,
    PasswordchangeComponent,
    InvitefriendsComponent,
    UpdateprofileComponent,
    VideoflagComponent
  ]
})
export class EmailModule { }
