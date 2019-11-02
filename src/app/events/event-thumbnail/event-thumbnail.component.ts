import { Component, Input } from '@angular/core'
import { IEvent } from '../shared';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styleUrls: [ './event-thumbnail.component.css' ]
})

export class EventThumbnailComponent {
    @Input() event: IEvent;

    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00am';
        return {green: isEarlyStart, bold: isEarlyStart};
    }
}
