import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationComponent } from './destination.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [{
    path: 'portal',
    component: LayoutComponent,
    children: [
        { path: 'destination', component: DestinationComponent }
    ]
}];


export const appRoutingProviders: any[] = [];

export const DestinationRoutes: ModuleWithProviders = RouterModule.forChild(routes);
