import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    ViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
