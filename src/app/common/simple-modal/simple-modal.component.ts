import { Component, Input, ViewChild, ElementRef, Inject } from "@angular/core";
import { JQ_TOKEN } from '../jquery.service';

@Component({
    selector: 'simple-modal',
    templateUrl: './simple-modal.component.html',
    styleUrls: ['./simple-modal.component.css']
})

export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnBodyClick: string;

    @ViewChild('modalContainer') containerElement: ElementRef;

    constructor(@Inject(JQ_TOKEN) private $:any) {}

    closeModal() {
        if(this.closeOnBodyClick.toLocaleLowerCase() === "true") {
            this.$(this.containerElement.nativeElement).modal('hide');
        }
    }
}