import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RoutingComponents } from './app-routing.module'
import { EncapsulationComponent } from './encapsulation/encapsulation.component';

/*import { Routes, RouterModule } from '@angular/router';*/

import { AppComponent } from './app.component';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    EncapsulationComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbTooltipModule,
    NgbPopoverModule,
    NgbCollapseModule,
    NoopAnimationsModule,
/*    RouterModule.forRoot(appRoutes),*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
