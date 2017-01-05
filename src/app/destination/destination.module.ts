import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DestinationRoutes } from './destination.routes';
import { DestinationComponent } from './destination.component';

import { DestinationService } from './services/destination.service';
import { ListComponent } from './../shared/components/list/list.component';
import { SlickCarouselComponent } from './../shared/components/slick-carousel/slick-carousel.component';
import { SearchTourComponent } from './../shared/components/search-tour/search-tour.component';

import { AgmCoreModule } from 'angular2-google-maps/core';



@NgModule({
    imports: [BrowserModule, RouterModule, FormsModule, DestinationRoutes, AgmCoreModule.forRoot({ apiKey: 'AIzaSyAJaHBHdkCGsssD0DXcdb_XAYYVh2OYL-w' })],
    exports: [],
    declarations: [DestinationComponent, ListComponent, SlickCarouselComponent, SearchTourComponent],
    providers: [DestinationService],
})
export class DestinationModule { }
