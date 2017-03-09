import { NgModule } from '@angular/core';
import { VideoscatComponent } from './videoscat.component';
import {AllvideosComponent} from './allvideos.component';
import {VcommentsComponent} from './videocomments.component';
import {VsettingComponent} from'./videosetting.component'
//import { DataTableModule } from 'angular-2-data-table';
import { VideosRoutingModule } from './videos-routing.module';
import {Button, DataTableModule,Footer, Column} from "../../custommodules/primeng/primeng";
@NgModule({
  imports: [ VideosRoutingModule,DataTableModule ],
  declarations: [
   VideoscatComponent,
   AllvideosComponent,
   VcommentsComponent,
   VsettingComponent
  
  ]
})
export class VideosModule { }
