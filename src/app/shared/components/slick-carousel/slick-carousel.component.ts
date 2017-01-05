import { Component, Input, ElementRef, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;
import 'slick-carousel';

@Component({
    selector: 'slick-carousel',
    template: `
    <div *ngFor="let item of data">
        <img class="btn btn-lg" src="{{item.imgUrl}}" />
    </div>
    `
})
export class SlickCarouselComponent implements AfterViewInit {
    @Input() options: {};
    @Input() data: any;
    $element: any;
    constructor(private el: ElementRef) {
    }

    ngOnInit(): void {

    }

    ngOnChanges(event): void {

    }
    ngAfterViewInit() {
        
        this.$element = jQuery(this.el.nativeElement).slick(this.options);
    }
}