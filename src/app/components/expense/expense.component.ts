import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Expense, UserToExpenses } from 'src/app/models/Expense';
import { User } from 'src/app/models/User';
import { MatTreeFlatDataSource, MatTreeFlattener, MatDialog } from '@angular/material';
import { FlatTreeControl } from '@angular/cdk/tree';
import { ExpenseFormComponent } from '../expense-form/expense-form.component';
import { ExpensesService } from 'src/app/services/expenses.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit, OnChanges {
  private usernames: String[] = [];
  @Input('participants') participants: User[];
  @Input('expenses') expenses: UserToExpenses;

  @Output()
  public event: EventEmitter<any> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    if (this.expenses) {
      this.usernames = Object.keys(this.expenses);
      console.log(this.usernames)
    }
  }

  constructor(private expenseDialog: MatDialog, private expenseService:ExpensesService, private activatedRoute: ActivatedRoute, private authService:AuthService) { }

  ngOnInit() {

  }
  onCreate() {
    const dialogRef = this.expenseDialog.open(ExpenseFormComponent, { data: {} });
    dialogRef.afterClosed().subscribe(result => {
      debugger;
      if (result) {
          let tripId: string = this.activatedRoute.snapshot.paramMap.get('id');
          this.expenseService.addNewExpenseForTrip(tripId,result).subscribe(newExpense=>{
            let expenseOwner:string = newExpense.username;
            if(!this.expenses[expenseOwner]) {
              this.expenses[expenseOwner] = [];
            }
            this.expenses[expenseOwner].push(newExpense);
          });
      }
    });
  }

  onEdit(expense:Expense) {
    const dialogRef = this.expenseDialog.open(ExpenseFormComponent, {
       data: {expense:expense} 
      });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
          result.id = expense.id;
          let tripId: string = this.activatedRoute.snapshot.paramMap.get('id');

          this.expenseService.updateExpenseForTrip(tripId,result).subscribe(updatedExpense=>{
            this.event.emit();
          });
      }
    });
  }

  public isOwner(expense:Expense):boolean {
    return this.authService.getUserName()==expense.username;
  }
}
