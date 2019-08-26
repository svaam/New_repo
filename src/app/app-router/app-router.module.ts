import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MeanStackModule } from '../meanStackFolder/core/mean-stack/mean-stack.module';

const appRoute: Routes = [
  {path: '', loadChildren : () => MeanStackModule}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouterModule { }
