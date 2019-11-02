import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/events.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
    templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
    events: IEvent[];

    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute ) {

    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events']
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName);
    }
}
