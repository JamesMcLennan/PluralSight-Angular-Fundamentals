import { Component, Input } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styleUrls: [ './event-thumbnail.component.css' ]
})

export class EventThumbnailComponent {
    @Input() event: any
}