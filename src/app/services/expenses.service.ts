import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense, UserToExpenses } from '../models/Expense';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private http:HttpClient) { }

  public getExpensesForTrip(tripId:string):Observable<UserToExpenses>{
    return this.http.get<UserToExpenses>(`http://localhost:8080/api/expenses/${tripId}`);
  }
  public addNewExpenseForTrip(tripId:string, newExpense:Expense):Observable<Expense> {
    return this.http.post<Expense>(`http://localhost:8080/api/expenses/${tripId}`,newExpense);
  }
}
