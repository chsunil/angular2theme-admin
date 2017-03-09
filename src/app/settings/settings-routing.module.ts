import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralComponent } from './general.component';
import { SocialComponent } from './social.component';
import { CountriesComponent } from './countries.component';
import { LanguageComponent } from './language.component'; 

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Setting Pages'
    },
    children: [
      {
        path: 'general',
        component: GeneralComponent,
        data: {
          title: 'General Settings'
        }
      },
      {
        path: 'social',
        component: SocialComponent,
        data: {
          title: 'Social Settings'
        }
      },
      {
        path: 'countries',
        component: CountriesComponent,
        data: {
          title: 'Countries Settings'
        }
      },
      {
        path: 'language',
        component: LanguageComponent,
        data: {
          title: 'Language Settings'
        }
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
