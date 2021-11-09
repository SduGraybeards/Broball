import { StartballComponent } from './components/startball/startball.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProfileComponent},
  {path:"profiles",component:ProfileComponent},
  {path:"home",component:HomeComponent},
  {path:"startball",component:StartballComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[ProfileComponent,HomeComponent]