import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ModulePanelComponent } from './module-panel/module-panel.component';
import { TopPanelComponent } from './top-panel/top-panel.component';
import { LnaContentComponent } from './lna-content/lna-content.component';
import { FooterQuicklinksComponent } from './footer/footer-quicklinks.component';
import { LearningMenuComponent } from './learning-menu/learning-menu.component';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap'
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';

const appRoutes: Routes = [
  { path: 'learning-menu', component: LearningMenuComponent },
  { path: 'lna-content', component: LnaContentComponent },
  { path: 'dashboard', component: DashboardComponent}
  ]


@NgModule({
  declarations: [
    AppComponent,
    ModulePanelComponent,
    TopPanelComponent,
    LnaContentComponent,
    FooterQuicklinksComponent,
    LearningMenuComponent,
    DashboardComponent,
    EncapsulationComponent
  ],
  imports: [
    BrowserModule,
    NgbTooltipModule,
    NgbPopoverModule,
    NgbCollapseModule,
    NoopAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
