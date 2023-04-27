import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RoutingComponents } from './app-routing.module'
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { FormsModule } from "@angular/forms";

/*import { Routes, RouterModule } from '@angular/router';*/

import { AppComponent } from './app.component';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { ColorThemesComponent } from './top-panel/color-themes/color-themes.component';
import { SettingComponent } from './menu/time-menu/setting/setting.component';



@NgModule({
  declarations: [
    AppComponent,
    EncapsulationComponent,
    RoutingComponents,
    ColorThemesComponent,
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
    LabelModule
/*    RouterModule.forRoot(appRoutes),*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
