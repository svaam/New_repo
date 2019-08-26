import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FurnitureRouterModule } from '../furniture-router/furniture-router.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from '../../home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { SliderModule } from 'angular-image-slider';



@NgModule({
  
  imports: [
    CommonModule,
    FurnitureRouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    SliderModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class FurnitureModule { }
