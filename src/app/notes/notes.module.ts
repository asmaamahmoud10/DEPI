import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
export class NotesModule { }
