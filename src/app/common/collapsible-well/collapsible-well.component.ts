import { Component, Input } from "@angular/core";

@Component({
    selector: 'collapsible-well',
    templateUrl: './collapsible-well.component.html',
    styleUrls: ['./collapsible-well.component.css']
})

export class CollapsibleWellComponent {
    @Input() title: string;
    visible: boolean = true;

    toggleContent() {
        this.visible = !this.visible;
    }
}