import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'destination',
    templateUrl: 'destination.component.html'
})
export class DestinationComponent implements OnInit {
    constructor() { }
    sliderData: any = [];
    destinations: any = [];
    destinationOptions: any = {};
    searchOptions: any = {};
    lat: number = 51.678418;
    lng: number = 7.809007;

    ngOnInit() {
        this.sliderData = [
            { id: 1, dispayName: 'Lima', name: 'tv', imgUrl: "http://www.turismodias.net/img/servicios/busEconomico1.jpg" },
            { id: 2, dispayName: 'Chepen', name: 'chrome', imgUrl: "http://www.turismodias.net/img/servicios/busEconomico1.jpg" },
            { id: 3, dispayName: 'Chiclayo', name: 'cable', imgUrl: "http://www.turismodias.net/img/servicios/busEconomico1.jpg" }
        ];
        this.destinations = [
            { id: 0, name: 'Chiclayo', route: "" },
            { id: 1, name: 'Chepen', route: "" },
            { id: 2, name: 'Cajamarca', route: "" },
            { id: 3, name: 'Trujillo', route: "" },
            { id: 4, name: 'Chimbote', route: "" }
        ];
        this.destinationOptions = { title: "Destinos", filter: "Lima" };
        this.searchOptions = { from: 1, to: 2, start: new Date(), end: new Date(), oneWay:false, twoWay:false };
    }
}