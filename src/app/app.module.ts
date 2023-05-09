import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RoutingComponents } from './app-routing.module'
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/*import { Routes, RouterModule } from '@angular/router';*/

import { AppComponent } from './app.component';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { SettingComponent } from './menu/time-menu/setting/setting.component';




@NgModule({
  declarations: [
    AppComponent,
    EncapsulationComponent,
    RoutingComponents,
    SettingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbTooltipModule,
    NgbPopoverModule,
    NgbCollapseModule,
    NoopAnimationsModule,
    GridModule,
    BrowserAnimationsModule,
    FormsModule,
    InputsModule,
    LabelModule,
    DropDownsModule,
    ButtonsModule,
    ReactiveFormsModule
/*    RouterModule.forRoot(appRoutes),*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
