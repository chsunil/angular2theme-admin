import { NgModule } from '@angular/core';

import { GeneralComponent } from './general.component';
 import { SocialComponent } from './social.component';
 import { CountriesComponent } from './countries.component';
/* import { LanguageComponent } from './language.component'; 
*/
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  imports: [ SettingsRoutingModule ],
  declarations: [
    GeneralComponent,
    SocialComponent,
    CountriesComponent,
   /* LanguageComponent */
  ]
})
export class SettingsModule { }
