import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { IEvent, EventService } from '../shared';

@Component({
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.css']
})

export class CreateEventComponent {
    newEvent:IEvent
    isDirty:boolean = true;

    constructor(private router: Router, private eventService: EventService) {
        
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/events'])
    }

    cancel() {
        this.router.navigate(['/events'])
    }
}