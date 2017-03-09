import { NgModule } from '@angular/core';
// Modal Component
import { ModalModule } from 'ng2-bootstrap/modal';
import { GeneralComponent } from './general.component';
 import { SocialComponent } from './social.component';
 import { CountriesComponent } from './countries.component';
 import { LanguageComponent } from './language.component'; 
 import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  imports: [ SettingsRoutingModule, DragulaModule, ModalModule.forRoot() ],
  declarations: [
    GeneralComponent,
    SocialComponent,
    CountriesComponent,
    LanguageComponent,
    

  ]
})
export class SettingsModule { }
