import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';
import { AgencyRoutes }   from './agency.routes';
import { AgencyComponent }   from './agency.component';
import { AgencyService }   from './services/agency.service';


@NgModule({
    imports: [BrowserModule, RouterModule, AgencyRoutes],
    exports: [],
    declarations: [AgencyComponent],
    providers: [AgencyService],
})
export class AgencyModule { }
