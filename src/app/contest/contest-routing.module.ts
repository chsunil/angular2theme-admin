import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { PrizesComponent } from './prizes.component';
import { RulesComponent } from './rules.component';
import { SpecialComponent } from './special.component';
import { WinnersComponent } from './winners.component';
import {AddcontestComponent} from './addcontest.component';
import {AddspcontestComponent} from './addspcontest.compontent';
import {ViewcontestComponent} from './viewcontest.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'contest'
    },
    children: [
      {
        path: 'main',
        component: MainComponent,
        data: {
          title: 'main'
        }
      },
      {
        path: 'special',
        component: SpecialComponent,
        data: {
          title: 'special'
        }
      },
      {
        path: 'winners',
        component: WinnersComponent,
        data: {
          title: 'winners'
        }
      },
      {
        path: 'prizes',
        component: PrizesComponent,
        data: {
          title: 'prizes'
        }
      },
      {
        path: 'rules',
        component: RulesComponent,
        data: {
          title: 'rules'
        }
      },
       {
        path: 'addcontest',
        component: AddcontestComponent,
        data: {
          title: 'addcontest'
        }
      },
      {
        path: 'viewcontest',
        component: ViewcontestComponent,
        data: {
          title: 'viewcontest'
        }
      },
       {
        path: 'addspcontest',
        component: AddspcontestComponent,
        data: {
          title: 'addspcontest'
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
