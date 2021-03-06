import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ContestModule } from './contest/contest.module';
import { EmailModule } from './email/email.module';
import { SettingsModule } from './settings/settings.module';
import { UsersModule } from './users/users.module';
import { VideosModule } from './videos/videos.module';
// DragulaModule  
import { DragulaModule } from 'ng2-dragula/';
//prime ng module
import {PickListModule} from '../custommodules/primeng/primeng';
import {Button, DataTableModule,Footer, Column} from "../custommodules/primeng/primeng";
import {TabViewModule} from '../custommodules/primeng/primeng';
import {GrowlModule} from '../custommodules/primeng/primeng';
// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    ContestModule,
    EmailModule,
    SettingsModule,
    UsersModule,
    VideosModule,
    DropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
   PickListModule,
   DragulaModule,
   DataTableModule,
   TabViewModule
    
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
