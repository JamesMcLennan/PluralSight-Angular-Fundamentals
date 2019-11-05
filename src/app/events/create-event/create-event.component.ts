import { Component, Inject } from '@angular/core'
import { Router } from '@angular/router';
import { IEvent, EventService } from '../shared';
import { TOASTR_TOKEN, Toastr } from 'src/app/common/toastr.service';

@Component({
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.css']
})

export class CreateEventComponent {
    newEvent:IEvent
    isDirty:boolean = true;

    constructor(private router: Router, 
        private eventService: EventService,
        @Inject(TOASTR_TOKEN) private toastr: Toastr) {
        
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.toastr.success("Event Saved!")
        this.router.navigate(['/events'])
    }

    cancel() {
        this.router.navigate(['/events'])
    }
}