import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { EventService } from './shared/events.service';
import { map } from 'rxjs/operators'

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventsService: EventService) {

    }
    
    resolve() {
        return this.eventsService.getEvents();
    }
}