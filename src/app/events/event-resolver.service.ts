import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './shared/events.service';
import { map } from 'rxjs/operators'

@Injectable()
export class EventResolver implements Resolve<any> {
    constructor(private eventsService: EventService) {

    }
    
    resolve(route: ActivatedRouteSnapshot) {
        return this.eventsService.getEvent(route.params['id']);
    }
}