import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent }  from './layouts/simple-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './chartjs/chartjs.module#ChartJSModule'
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  },
  {
    path: 'settings',
    component: FullLayoutComponent,
    data: {
      title: 'settings'
    },
    children: [
      {
        path: '',
        loadChildren: './settings/settings.module#SettingsModule',
      }
    ]
  },
   {
    path: 'users',
    component: FullLayoutComponent,
    data: {
      title: 'users'
    },
    children: [
      {
        path: '',
        loadChildren: './users/users.module#UsersModule',
      }
    ]
  },
   {
    path: 'videos',
    component: FullLayoutComponent,
    data: {
      title: 'videos'
    },
    children: [
      {
        path: '',
        loadChildren: './videos/videos.module#VideosModule',
      }
    ]
  },
  {
    path: 'contest',
    component: FullLayoutComponent,
    data: {
      title: 'contest'
    },
    children: [
      {
        path: '',
        loadChildren: './contest/contest.module#ContestModule',
      }
    ]
  },
  {
    path: 'email',
    component: FullLayoutComponent,
    data: {
      title: 'email'
    },
    children: [
      {
        path: '',
        loadChildren: './email/email.module#EmailModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
