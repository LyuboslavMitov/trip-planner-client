import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { ActivatedRoute } from '@angular/router';
import { Trip } from 'src/app/models/Trip';
import { User } from 'src/app/models/User';
import { MatTabChangeEvent, MatTabGroup, MatTab, MatDialog, MatDialogRef } from '@angular/material';
import { ScheduleService } from 'src/app/services/schedule.service';
import { ScheduleItem } from 'src/app/models/ScheduleItem';
import { ExpensesService } from 'src/app/services/expenses.service';
import { Expense, UserToExpenses } from 'src/app/models/Expense';
import { TripFormComponent } from '../trip-form/trip-form.component';
@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit, AfterViewInit {

  private tripId: string;
  private trip: Trip;
  private participants: User[];
  private scheduleItems: ScheduleItem[];
  private expenses: UserToExpenses;
  @ViewChild('tabGroup', { static: false }) tabGroup: MatTabGroup;

  constructor(private tripService: TripsService, private scheduleService: ScheduleService,
    private expenseService: ExpensesService, private activatedRoute: ActivatedRoute, private tripDialog: MatDialog) { }

  ngOnInit() {
    this.tripId = this.activatedRoute.snapshot.paramMap.get('id');

    this.tripService.getTripById(this.tripId).subscribe(tripRes => this.trip = tripRes);
    this.tripService.getTripParticipants(this.tripId).subscribe(users => this.participants = users);
    this.expenseService.getExpensesForTrip(this.tripId).subscribe(expenses => {
      this.expenses = expenses;
      console.log(this.expenses)
    });
  }

  private fetchParticipants() {
    this.tripService.getTripParticipants(this.tripId).subscribe(users => {
      this.participants = users
    });
  }
  private fetchSchedule() {
    this.scheduleService.getScheduleForTrip(this.tripId).subscribe(scheduleItems => this.scheduleItems = scheduleItems);
  }

  private fetchExpenses() {
    this.expenseService.getExpensesForTrip(this.tripId).subscribe(expenses => {
      this.expenses = expenses;
      console.log(this.expenses)
    });
  }
  ngAfterViewInit() {
    this.tabGroup.animationDuration = '700'
  }

  private async disableTabs(duration: number) {
    this.tabGroup._tabs.forEach(t => t.disabled = true)
    await new Promise(r => setTimeout(r, duration)).then(res =>
      this.tabGroup._tabs.forEach(t => t.disabled = false));
  }

  tabChange(event: MatTabChangeEvent) {
    switch (event.index) {
      case 0: this.fetchParticipants(); break;
      case 1: this.fetchSchedule(); break;
      case 2: this.fetchExpenses(); break;
    }
  }



  openDialog(action: string): void {
    const dialogRef = this.tripDialog.open(TripFormComponent, {
      data: { trip: this.trip, participants: this.participants }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        // this.trip = result;
        result.id=this.tripId;
        result.ownerId=this.trip.ownerId;
        debugger;
        this.tripService.updateTrip(result).subscribe(updatedTrip=>this.trip=updatedTrip);
      }
    });
  }
}

//5e4303ae2879660a646c0679 ORIGINAL tripId
//
