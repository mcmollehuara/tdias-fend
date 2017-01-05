import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'list',
    templateUrl: 'list.component.html'
})
export class ListComponent implements OnInit {
    constructor() { }
    @Input() data: ListData;
    @Input() options: ListOptions;
    ngOnInit() { }
}

interface ListOptions {
    title: string;
    filter: string;
}

interface ListData {
    id: number;
    name: string;
    route: string;
}
