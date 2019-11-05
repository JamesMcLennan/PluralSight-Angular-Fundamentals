import { Directive, OnInit, Inject, ElementRef } from "@angular/core";
import { JQ_TOKEN } from './jquery.service';

@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;

    constructor(elRef: ElementRef, @Inject(JQ_TOKEN) private $ : any) {
        this.el = elRef.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', e => {
            this.$('#simple-modal').modal({})
        });
    }
}