import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { LayoutService } from './services/layout.service';
import { LayoutComponent } from './layout.component';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import { RouterModule }  from '@angular/router';
@NgModule({
    imports: [BrowserModule, RouterModule],
    exports: [],
    declarations: [LayoutComponent, NavbarComponent, FooterComponent],
    providers: [LayoutService],
})
export class LayoutModule {

}
