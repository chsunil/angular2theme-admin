import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { PrizesComponent } from './prizes.component';
import { RulesComponent } from './rules.component';
import { SpecialComponent } from './special.component';
import { WinnersComponent } from './winners.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Main contest'
    },
    children: [
      {
        path: 'main',
        component: MainComponent,
        data: {
          title: 'Main Contest'
        }
      },
      {
        path: 'special',
        component: SpecialComponent,
        data: {
          title: 'Special Contest'
        }
      },
      {
        path: 'winners',
        component: WinnersComponent,
        data: {
          title: 'Winners'
        }
      },
      {
        path: 'prizes',
        component: PrizesComponent,
        data: {
          title: 'Prizes'
        }
      },
      {
        path: 'rules',
        component: RulesComponent,
        data: {
          title: 'Rules'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestRoutingModule {}
