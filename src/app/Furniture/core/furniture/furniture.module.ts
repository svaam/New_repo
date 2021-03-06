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
import { HeaderComponent } from '../../header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTreeModule} from '@angular/material/tree';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SofaComponent } from '../../Item/sofa/sofa.component';
import { DinningComponent } from '../../Item/dinning/dinning.component';
import { ChairComponent } from '../../Item/chair/chair.component';
import { BedComponent } from '../../Item/bed/bed.component';
import { AboutUsComponent } from '../../Other/about-us/about-us.component';
import { ContactUsComponent } from '../../Other/contact-us/contact-us.component';




@NgModule({
  
  imports: [
    CommonModule,
    FurnitureRouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    SliderModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatTreeModule,
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    BedComponent,
    ChairComponent,
    DinningComponent,
    SofaComponent,
    AboutUsComponent,
    ContactUsComponent
  ]
})
export class FurnitureModule { }
