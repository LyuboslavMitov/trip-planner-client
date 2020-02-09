import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/Trip';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http: HttpClient) { }

  public getMyTrips() : Observable<Trip[]>{
    return this.http.get<Trip[]>(`http://localhost:8080/api/trips`);
  }
}
