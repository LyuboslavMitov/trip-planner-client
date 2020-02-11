import { Component, OnInit, Input } from '@angular/core';
import { ScheduleService } from 'src/app/services/schedule.service';
import { ScheduleItem } from 'src/app/models/ScheduleItem';
import { MatDialog } from '@angular/material';
import { ScheduleFormComponent } from '../schedule-form/schedule-form.component';
import { User } from 'src/app/models/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  panelOpenState = false;
  @Input("participants") participants: User[];
  @Input('scheduleItems') scheduleItems: ScheduleItem[];
  constructor(private scheduleDialog: MatDialog, private scheduleService: ScheduleService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public onEdit(editItem: ScheduleItem) {
    console.log(editItem)
    const dialogRef = this.scheduleDialog.open(ScheduleFormComponent, {
      data: { scheduleItem: editItem, participants: this.participants }
    });
    dialogRef.afterClosed().subscribe(result => {
      debugger;
      if (editItem != result) {
        console.log('different')
        let tripId : string = this.activatedRoute.snapshot.paramMap.get('id');
        // this.scheduleService.addScheduleItem(tripId)
      }
      console.log(result);
    });

  }
}
