import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'upvote',
    templateUrl: './upvote.component.html',
    styleUrls: ['./upvote.component.css']
})

export class UpvoteComponent {
    @Input() count: number;
    @Input() set voted(val) {
        this.iconColour = val ? 'red' : 'white'
    }
    @Output() vote = new EventEmitter();
    iconColour: string;

    onClick() {
        this.vote.emit({});
    }
}