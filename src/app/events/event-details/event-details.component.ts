import { Component } from '@angular/core';
import {EventService} from '../shared/events.service';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})

export class EventDetailsComponent {
  event: any;
  constructor(private eventService: EventService) {

  }

  ngOnInit() {
    this.event = this.eventService.getEvent(1);
  }
}
