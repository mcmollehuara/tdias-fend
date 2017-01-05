import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [{
    path: 'portal',
    component: LayoutComponent,
    children: [
        { path: 'order', component: OrderComponent }
    ]
}];


export const appRoutingProviders: any[] = [];

export const OrderRoutes: ModuleWithProviders = RouterModule.forChild(routes);
