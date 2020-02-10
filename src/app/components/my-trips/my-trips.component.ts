import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { Trip } from 'src/app/models/Trip';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { TripFormComponent } from '../trip-form/trip-form.component';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.css']
})
export class MyTripsComponent implements OnInit {

  private trips: Trip[];
  private users: User[];

  constructor(private authService:AuthService, private tripService: TripsService,private userService:UserService, private router: Router, private tripDialog: MatDialog) { }

  ngOnInit() {
    this.tripService.getMyTrips().subscribe(userTrips => this.trips = userTrips);
    this.userService.getAllUsers().subscribe(users=>this.users=users.filter(u=>u.id!=this.authService.getUserId()));
  }
  public onClick(tripId: any) {
    console.log(tripId);
    this.router.navigate(['/myTrips', { id: tripId }]);
  }

  public openCreateTripDialog() {
    let tripId: string;
    const dialogRef = this.tripDialog.open(TripFormComponent, {
      data: {participants: this.users }
    });

    dialogRef.afterClosed().subscribe(trip => {
      console.log('The dialog was closed');
      console.log(trip);
      debugger;
      if(trip)
        debugger;
        trip.ownerId=this.authService.getUserId();
        this.tripService.addTrip(trip).subscribe(createdTrip=>this.trips.push(createdTrip));
    });
  }
}
