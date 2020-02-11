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
      debugger;
      this.participants = this.data.participants;
    }
    this.createTripForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnDestroy(): void {
    // this.trip ? this.dialogRef.close(this.trip) : this.dialogRef.close();
  }

  createTripForm() {

    if (this.trip) {
      //     <!-- Edit form-->
      this.tripForm = new FormGroup({
        name: new FormControl(this.trip.name),
        destination: new FormControl(this.trip.destination),
        startDate: new FormControl(this.trip.startDate),
        endDate: new FormControl(this.trip.endDate),
        description: new FormControl(this.trip.description ? this.trip.description : ''),
        participants: new FormControl(this.trip.participantsNames)
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

  onSubmit(formValue: any,action:string) {
    //check if it's valid
    let trip = formValue;
    let participantsId: string[] = [];
    let participantsNames: string[] = [];

    
    if (formValue.participants) {
      formValue.participants.forEach(element => {
        participantsId.push(element['id']);
        participantsNames.push(element['username']);
      });
      trip.participantsId = participantsId;
      trip.participantsNames = participantsNames;
    }
    //get the coorect id and names -> from this.trip
    if (this.trip) {
      this.trip.participantsNames.forEach(user => participantsNames.push(user['username']))
      trip.participantsId = this.trip.participantsId;
      console.log(trip.participantsNames);
      debugger;
    }

    this.dialogRef.close(trip);
  }
}
