import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { Trip } from 'src/app/models/Trip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.css']
})
export class MyTripsComponent implements OnInit {

  private trips: Trip[];
  constructor(private tripService: TripsService, private router: Router) { }

  ngOnInit() {
    this.tripService.getMyTrips().subscribe(userTrips => this.trips = userTrips);
  }
  public onClick(tripId: any) {
    console.log(tripId);
    this.router.navigate(['/myTrips', { id: tripId }]);
  }
}
