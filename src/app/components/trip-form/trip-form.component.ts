import { Component, OnInit, Input, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Trip } from 'src/app/models/Trip';
import { User } from 'src/app/models/User';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { debug } from 'util';

export interface DialogData {
  trip: Trip;
  participants: User[];
}

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.css']
})

export class TripFormComponent implements OnInit, OnDestroy {


  tripForm: FormGroup;
  trip: Trip;
  participants: User[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<TripFormComponent>) { }
  ngOnInit() {
    if (this.data) {
      this.trip = this.data.trip;
      this.participants = this.data.participants;
    }
    this.createTripForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnDestroy(): void {
    this.trip ? this.dialogRef.close(this.trip):this.dialogRef.close();
  }

  createTripForm() {

    if (this.trip) {
      //     <!-- Edit form-->
      this.tripForm = new FormGroup({
        name: new FormControl(this.trip.name),
        destination: new FormControl(this.trip.destination),
        startDate: new FormControl(this.trip.startDate),
        endDate: new FormControl(this.trip.endDate),
        description: new FormControl(''),
        participants: new FormControl(this.trip.participants)
      });
    }
    else {
      //      <!-- Create form -->
      this.tripForm = new FormGroup({
        name: new FormControl(''),
        destination: new FormControl(''),
        startDate: new FormControl(''),
        endDate: new FormControl(''),
        description: new FormControl(''),
        participants: new FormControl('')
      });
    }
  }

  onSubmit(formValue: any) {
    //check if it's valid
    this.trip=formValue;
    this.dialogRef.close(this.trip);
  }
}
