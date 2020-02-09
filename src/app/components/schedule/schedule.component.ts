import { Component, OnInit, Input } from '@angular/core';
import { ScheduleService } from 'src/app/services/schedule.service';
import { ScheduleItem } from 'src/app/models/ScheduleItem';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  panelOpenState = false;

  @Input('scheduleItems') scheduleItems: ScheduleItem[];
  constructor() { }

  ngOnInit() {
  }

}
