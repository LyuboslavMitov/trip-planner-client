import { Component, OnInit, Input } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  @Input('participants') participants: User[];

  constructor() { }

  ngOnInit() {
  }
}
