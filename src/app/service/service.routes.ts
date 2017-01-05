import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceComponent } from './service.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [{
    path: 'portal',
    component: LayoutComponent,
    children: [
        { path: 'service', component: ServiceComponent }
    ]
}];


export const appRoutingProviders: any[] = [];

export const ServiceRoutes: ModuleWithProviders = RouterModule.forChild(routes);
