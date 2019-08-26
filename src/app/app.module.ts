import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MeanStackModule } from './meanStackFolder/core/mean-stack/mean-stack.module';
import { AppRouterModule } from './app-router/app-router.module';
import { HomeComponent } from './Furniture/home/home.component';
import { FurnitureModule } from './Furniture/core/furniture/furniture.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    MatCardModule,
    MeanStackModule,
    FurnitureModule
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
