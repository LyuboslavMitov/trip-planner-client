import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScheduleItem } from '../models/ScheduleItem';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http:HttpClient) { }

  public getScheduleForTrip(tripId:string) :Observable<ScheduleItem[]>{
    return this.http.get<ScheduleItem[]>(`http://localhost:8080/api/scheduleItems/${tripId}`)
  }
}
