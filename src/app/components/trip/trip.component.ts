import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  private tripId:string;

  constructor(private tripService:TripsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.tripId=this.activatedRoute.snapshot.paramMap.get('id');
  }
  
}
