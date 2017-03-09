import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoscatComponent } from './videoscat.component';
import {AllvideosComponent} from './allvideos.component';
import {VcommentsComponent} from './videocomments.component';
import {VsettingComponent} from'./videosetting.component'
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Video Pages'
    },
    children: [
      {
        path: 'videoscat',
        component: VideoscatComponent,
        data: {
          title: 'Video-category'
        }
      },
       {
        path: 'allvideos',
        component: AllvideosComponent,
        data: {
          title: 'All-videos'
        }
      },
      {
        path: 'videocomments',
        component: VcommentsComponent,
        data: {
          title: 'video comments'
        }
      },
      {
        path: 'videosetting',
        component: VsettingComponent,
        data: {
          title: 'video Settings'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule {}
