import { Component } from '@angular/core';
import {EventService} from '../shared/events.service';
import {ActivatedRoute, Params} from '@angular/router';
import { IEvent, ISession } from '../shared';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})

export class EventDetailsComponent {
  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    // Subscribe to the params to check for re-routes to the same component.
    // When the route to self is called, we need to reset all component states to original.
    this.route.data.forEach((data) => {
        this.event = data['event'];
        this.resetState();
    });
  }

  addSession() {
    this.addMode = true
  }

  saveNewSession(session:ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false
  }

  cancelAddSession() {
    this.addMode = false
  }

  resetState() {
    this.addMode = false;
  }
}
