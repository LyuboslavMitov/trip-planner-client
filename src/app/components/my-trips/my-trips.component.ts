import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { Trip } from 'src/app/models/Trip';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { TripFormComponent } from '../trip-form/trip-form.component';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.css']
})
export class MyTripsComponent implements OnInit {

  private trips: Trip[];

  constructor(private tripService: TripsService, private router: Router, private tripDialog: MatDialog) { }

  ngOnInit() {
    this.tripService.getMyTrips().subscribe(userTrips => this.trips = userTrips);
  }
  public onClick(tripId: any) {
    console.log(tripId);
    this.router.navigate(['/myTrips', { id: tripId }]);
  }

  public openCreateTripDialog() {
    let tripId:string;
    const dialogRef = this.tripDialog.open(TripFormComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result)
      tripId = result.id;
    });
  }
}
