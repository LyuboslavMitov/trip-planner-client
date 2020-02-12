import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Expense } from 'src/app/models/Expense';
import { User } from 'src/app/models/User';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {

  expenseForm: FormGroup;
  expense: Expense;
  participants: User[];
  action: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ExpenseFormComponent>) { }

  ngOnInit() {

    if (this.data) {

      this.expense = this.data.expense;

      this.participants = this.data.participants;
      this.action = this.data.action

    }

    this.createExpenseForm();

  }

  onNoClick(): void {

    this.dialogRef.close();

  }

  createExpenseForm() {



    if (this.expense) {

      // <!-- Edit form-->

      this.expenseForm = new FormGroup({

        name: new FormControl(this.expense.name),

        dateOfExpense: new FormControl(this.expense.dateOfExpense),

        description: new FormControl(this.expense.description ? this.expense.description : ''),

        amount: new FormControl(this.expense.amount ? this.expense.amount : ''),

      });

    }

    else {

      // <!-- Create form -->

      this.expenseForm = new FormGroup({

        name: new FormControl(''),

        dateOfExpense: new FormControl(''),

        description: new FormControl(''),

        amount: new FormControl(''),

      });

    }

  }



  onSubmit(formValue: any) {
    //check if it's valid
      this.expense = formValue;
      this.dialogRef.close(this.expense);
  }

}
