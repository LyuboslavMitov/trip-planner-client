import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/Trip';
import { TripsService } from 'src/app/services/trips.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-other-trips',
  templateUrl: './other-trips.component.html',
  styleUrls: ['./other-trips.component.css'],
})
export class OtherTripsComponent implements OnInit {

  otherTrips:Trip[];
  constructor(private tripService:TripsService, private http:HttpClient) {
    this.tripService=new TripsService(http);
   }

  ngOnInit() {
    this.tripService.getOtherTrips().subscribe(otherTrips=>{
      this.otherTrips=otherTrips});
  }

}
