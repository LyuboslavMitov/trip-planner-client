import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/Trip';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http: HttpClient) { }

  public getMyTrips() : Observable<Trip[]>{
    return this.http.get<Trip[]>(`http://localhost:8080/api/trips`);
  }

  public getTripById(tripId:string) : Observable<Trip>{
    return this.http.get<Trip>(`http://localhost:8080/api/trips/${tripId}`);
  }

  public getTripParticipants(tripId): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:8080/api/trips/${tripId}/participants`);
  }

  public addTrip(trip:Trip): Observable<Trip> {
    return this.http.post<Trip>('http://localhost:8080/api/trips',trip);
  }
}
