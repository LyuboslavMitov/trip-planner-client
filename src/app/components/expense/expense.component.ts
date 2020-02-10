import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Expense, UserToExpenses } from 'src/app/models/Expense';
import { User } from 'src/app/models/User';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material';
import { FlatTreeControl } from '@angular/cdk/tree';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit, OnChanges {
  private usernames: String[] = [];
  @Input('participants') participants: User[];
  @Input('expenses') expenses: UserToExpenses;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.expenses) {
      this.usernames = Object.keys(this.expenses);
      console.log(this.usernames)
    }
  }


  constructor() { }

  ngOnInit() {
    
  }

}
