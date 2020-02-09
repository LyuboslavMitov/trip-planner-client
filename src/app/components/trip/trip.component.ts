import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { ActivatedRoute } from '@angular/router';
import { Trip } from 'src/app/models/Trip';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  private tripId: string;
  private trip: Trip;

  constructor(private tripService: TripsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.tripId = this.activatedRoute.snapshot.paramMap.get('id');
    this.tripService.getTripById(this.tripId).subscribe(tripRes => this.trip = tripRes);
  }

}
