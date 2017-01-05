import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';
import { ItineraryRoutes }   from './Itinerary.routes';
import { ItineraryComponent }   from './itinerary.component';
import { ItineraryService }   from './services/itinerary.service';


@NgModule({
    imports: [BrowserModule, RouterModule, ItineraryRoutes],
    exports: [],
    declarations: [ItineraryComponent],
    providers: [ItineraryService],
})
export class ItineraryModule { }
