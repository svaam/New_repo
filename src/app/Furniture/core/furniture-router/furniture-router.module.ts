import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../home/home.component';

const appRoute : Routes = [
  { path: 'home', component: HomeComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoute)
  ],
  declarations: []
})
export class FurnitureRouterModule { }
