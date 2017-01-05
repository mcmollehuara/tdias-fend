import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [{
    path: 'portal',
    component: LayoutComponent,
    children: [
        { path: 'company', component: CompanyComponent }
    ]
}];


export const appRoutingProviders: any[] = [];

export const CompanyRoutes: ModuleWithProviders = RouterModule.forChild(routes);
