import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';
import { ServiceRoutes }   from './service.routes';
import { ServiceComponent }   from './service.component';
import { ServiceService }   from './services/service.service';


@NgModule({
    imports: [BrowserModule, RouterModule, ServiceRoutes],
    exports: [],
    declarations: [ServiceComponent],
    providers: [ServiceService],
})
export class ServiceModule { }
