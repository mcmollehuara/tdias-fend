import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';
import { CompanyRoutes }   from './company.routes';
import { CompanyComponent }   from './company.component';
import { CompanyService }   from './services/company.service';


@NgModule({
    imports: [BrowserModule, RouterModule, CompanyRoutes],
    exports: [],
    declarations: [CompanyComponent],
    providers: [CompanyService],
})
export class CompanyModule { }
