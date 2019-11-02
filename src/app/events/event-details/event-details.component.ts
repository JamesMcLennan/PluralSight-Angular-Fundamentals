import { Component } from '@angular/core';
import {EventService} from '../shared/events.service';
import {ActivatedRoute} from '@angular/router';
import { IEvent } from '../shared';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})

export class EventDetailsComponent {
  event: IEvent;
  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }
}
