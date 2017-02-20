import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { PrizesComponent } from './prizes.component';
import { RulesComponent } from './rules.component';
import { SpecialComponent } from './special.component';
import { WinnersComponent } from './winners.component';
import { ContestRoutingModule } from './contest-routing.module';
import { DataTableModule } from 'angular-2-data-table';
import {AddcontestComponent} from'./addcontest.component'
import {AddspcontestComponent} from'./addspcontest.compontent'
@NgModule({
  imports: [  ContestRoutingModule,DataTableModule ],
  declarations: [
    MainComponent,
    SpecialComponent,
    PrizesComponent,
    RulesComponent,
    WinnersComponent,
    AddcontestComponent,
    AddspcontestComponent,
  ]
})
export class ContestModule{ }
