import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router'
import { from } from 'rxjs';
import { MeanStackModule } from '../mean-stack/mean-stack.module';
import { PostCreatComponent } from '../../post-creat/post-creat.component';
import { PostListComponent } from '../../post-list/post-list.component';
import { PostMainComponent } from '../../post-main/post-main.component';

const appRoute : Routes = [
  { path: '', component: PostMainComponent},
  { path: 'postCreate', component: PostCreatComponent},
  { path: 'postList', component: PostListComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoute)
  ],
  declarations: []
})
export class MeanStackRouterModule { }
