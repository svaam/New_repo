import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from '../../post-list/post-list.component';
import { PostCreatComponent } from '../../post-creat/post-creat.component';
import { MeanStackRouterModule } from '../mean-stack-router/mean-stack-router.module';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { PostMainComponent } from '../../post-main/post-main.component';






@NgModule({
  imports: [
    CommonModule,
    MeanStackRouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    MatButtonModule
    
  ],
  declarations: [
    PostCreatComponent,
    PostListComponent,
    PostMainComponent
  ]
})
export class MeanStackModule { }
