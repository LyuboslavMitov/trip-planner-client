import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    ) { }

  public getUserInfo(userId:string) : Observable<User>{ 
      return this.http.get<User>(`http://localhost:8080/api/users/${userId}`);
  }
}
