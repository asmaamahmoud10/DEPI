import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path:'home' ,component:HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
