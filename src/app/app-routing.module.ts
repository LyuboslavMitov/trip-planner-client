import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MyTripsComponent } from './components/my-trips/my-trips.component';
import { TripComponent } from './components/trip/trip.component';
import { AuthGuard } from './commons/auth.guard';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'user',canActivate: [AuthGuard],component:UserProfileComponent},
  {path: 'myTrips/:id', canActivate: [AuthGuard], component: TripComponent},
  {path:'myTrips',canActivate: [AuthGuard],component:MyTripsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
