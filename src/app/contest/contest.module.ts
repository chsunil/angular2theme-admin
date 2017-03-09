import { NgModule } from '@angular/core';
// Modal Component
import { ModalModule } from 'ng2-bootstrap/modal';
import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula';
import {CommonModule} from '@angular/common'
import { MainComponent } from './main.component';
import { PrizesComponent } from './prizes.component';
import { RulesComponent } from './rules.component';
import { SpecialComponent } from './special.component';
import { WinnersComponent } from './winners.component';
import { ContestRoutingModule } from './contest-routing.module';
//import { DataTableModule } from 'angular-2-data-table';
import {AddcontestComponent} from'./addcontest.component';
import {AddspcontestComponent} from'./addspcontest.compontent';
import {ViewcontestComponent} from'./viewcontest.component';
import {HttpModule, Http} from '@angular/http';
import {TabViewModule} from '../../custommodules/primeng/primeng';
import {GrowlModule} from '../../custommodules/primeng/primeng';
import { TabsModule } from 'ng2-bootstrap/tabs';
import {Button, DataTableModule,Footer, Column} from "../../custommodules/primeng/primeng";
@NgModule({
  imports: [  ContestRoutingModule,CommonModule,DragulaModule,TabViewModule,GrowlModule,DataTableModule,HttpModule,TabsModule.forRoot(), ModalModule.forRoot() ],
  declarations: [
    MainComponent,
    SpecialComponent,
    PrizesComponent,
    RulesComponent,
    WinnersComponent,
    AddcontestComponent,
    AddspcontestComponent,
    ViewcontestComponent,
  ]
})
export class ContestModule{ }
