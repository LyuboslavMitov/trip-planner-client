import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { User } from 'src/app/models/User';
import { ScheduleItem } from 'src/app/models/ScheduleItem';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {
  scheduleForm: FormGroup;
  scheduleItem: ScheduleItem;
  participants: User[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ScheduleFormComponent>) { }

  ngOnInit() {

    if (this.data) {
      this.scheduleItem = this.data.scheduleItem;
      this.participants = this.data.participants;
    }
    this.createScheduleForm();
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
  ngOnDestroy(): void {
    //TODO: Refactor this to be handled in the calling function 
    this.scheduleItem ? this.dialogRef.close(this.scheduleItem) : this.dialogRef.close();
  }
  createScheduleForm() {
    if (this.scheduleItem) {
      // <!-- Edit form--> 
      this.scheduleForm = new FormGroup({
        name: new FormControl(this.scheduleItem.name),
        location: new FormControl(this.scheduleItem.location),
        date: new FormControl(this.scheduleItem.date),
        description: new FormControl(this.scheduleItem.description ? this.scheduleItem.description : ''),
        duration: new FormControl(this.scheduleItem.duration ? this.scheduleItem.duration : ''),
        participants: new FormControl(this.scheduleItem.participantsNames)
      });
    }
    else {
      // <!-- Create form --> 
      this.scheduleForm = new FormGroup({
        name: new FormControl(''),
        location: new FormControl(''),
        date: new FormControl(''),
        description: new FormControl(),
        duration: new FormControl(),
        participants: new FormControl('')
      });
    }
  }
  onSubmit(formValue: any) {
    //check if it's valid 
    this.scheduleItem = formValue;
    let participantsId: string[] = [];
    let participantsNames: string[] = [];

    formValue.participants.forEach(element => {
      participantsId.push(element['id']);
    });
    this.scheduleItem.participantsId = participantsId;
    this.dialogRef.close(this.scheduleItem);
  }

}
