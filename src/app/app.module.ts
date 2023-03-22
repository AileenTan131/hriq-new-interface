import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModulePanelComponent } from './module-panel/module-panel.component';
import { TopPanelComponent } from './top-panel/top-panel.component';
import { LnaContentComponent } from './lna-content/lna-content.component';
import { FooterComponent } from './footer/footer.component';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap'
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ModulePanelComponent,
    TopPanelComponent,
    LnaContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbTooltipModule,
    NgbPopoverModule,
    NgbCollapseModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
