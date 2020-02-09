import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MyTripsComponent } from './components/my-trips/my-trips.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'user',component:UserProfileComponent},
  {path:'myTrips',component:MyTripsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
