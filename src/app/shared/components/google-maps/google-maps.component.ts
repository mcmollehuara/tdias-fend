import { Component, OnInit, Input, ElementRef} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'google-maps',
    templateUrl: 'google-maps.component.html'
})
export class GoogleMapsComponent implements OnInit {
    @Input() options: {};
    @Input() data: any;
    $element: any;
    constructor(private el: ElementRef) {
    }


    ngOnInit() { }
}