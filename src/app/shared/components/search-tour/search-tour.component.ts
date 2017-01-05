import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'search-tour',
    templateUrl: 'search-tour.component.html'
})
export class SearchTourComponent implements OnInit {
    @Input() data: Array<KeyValue>;
    @Input() options: SearchFilters;
    @Output() searchEmitter = new EventEmitter<SearchFilters>();
    constructor() { }

    ngOnInit() { }

    onSearchTour() {

        this.searchEmitter.emit();
    }
}

interface KeyValue {
    id: string;
    value: string;
}
/**
 * SearchTourOptions
 */
interface SearchFilters {
    title: string;
    oneWay: boolean;
    twoWay: boolean;
    from: string;
    to: string;
    start: Date;
    end: Date;
}
