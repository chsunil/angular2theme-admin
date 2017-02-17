import { NgModule } from '@angular/core';

import { RegisterComponent } from './register.component';
 import { ForgotpasswordComponent } from './forgotpassword.component';
 import { PasswordchangeComponent } from './passwordchange.component';

import { EmailRoutingModule } from './email-routing.module';

@NgModule({
  imports: [ EmailRoutingModule ],
  declarations: [
    RegisterComponent,
    ForgotpasswordComponent,
    PasswordchangeComponent,
  
  ]
})
export class EmailModule { }
