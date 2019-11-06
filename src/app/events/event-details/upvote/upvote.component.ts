import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'upvote',
    templateUrl: './upvote.component.html',
    styleUrls: ['./upvote.component.css']
})

export class UpvoteComponent {
    @Input() count: number;
    @Input() voted: boolean;
    @Output() vote = new EventEmitter();

    onClick() {
        this.vote.emit({});
    }
}