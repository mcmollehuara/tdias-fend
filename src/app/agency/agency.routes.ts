import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgencyComponent } from './agency.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [{
    path: 'portal',
    component: LayoutComponent,
    children: [
        { path: 'agency', component: AgencyComponent }
    ]
}];


export const appRoutingProviders: any[] = [];

export const AgencyRoutes: ModuleWithProviders = RouterModule.forChild(routes);
