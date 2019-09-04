import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { BedComponent } from '../../Item/bed/bed.component';
import { SofaComponent } from '../../Item/sofa/sofa.component';
import { ChairComponent } from '../../Item/chair/chair.component';
import { DinningComponent } from '../../Item/dinning/dinning.component';
import { AboutUsComponent } from '../../Other/about-us/about-us.component';
import { ContactUsComponent } from '../../Other/contact-us/contact-us.component';

const appRoute : Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'bed', component: BedComponent },
  { path: 'sofa', component: SofaComponent},
  { path: 'chair', component: ChairComponent},
  { path: 'dinning', component: DinningComponent},
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'contactus', component: ContactUsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoute)
  ],
  declarations: []
})
export class FurnitureRouterModule { }
