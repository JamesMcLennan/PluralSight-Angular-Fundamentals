import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { Injectable } from '@angular/core'
import { EventService } from '../shared/events.service'

// This is deprecated as we are now using event-resolver.service.ts to resolve events.
// The reason we changed this is due to the .getEvent() method being changed to a HTTP request, which returns an 
// obserable, which invalidates this logic.

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService: EventService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getEvent(+route.params['id']);

        if(!eventExists) {
            this.router.navigate(['/404']);
        }
        return eventExists;
    }
}