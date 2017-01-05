import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItineraryComponent } from './itinerary.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [{
    path: 'portal',
    component: LayoutComponent,
    children: [
        { path: 'itinerary', component: ItineraryComponent }
    ]
}];


export const appRoutingProviders: any[] = [];

export const ItineraryRoutes: ModuleWithProviders = RouterModule.forChild(routes);
