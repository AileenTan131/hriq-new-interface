import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ModulePanelComponent } from './module-panel/module-panel.component';
import { TopPanelComponent } from './top-panel/top-panel.component';
import { LnaContentComponent } from './lna-content/lna-content.component';
import { FooterQuicklinksComponent } from './footer/footer-quicklinks.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InformationComponent } from './information/information.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap'
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';

const appRoutes: Routes = [
  {
    path: 'homepage', component: HomepageComponent,
    children: [
      { path: 'information', component: InformationComponent },
      { path: 'dashboard', component: DashboardComponent }
    ]
  },
  { path: 'information', component: InformationComponent },
  { path: 'homepage/lna-content', component: LnaContentComponent },
  { path: 'homepage/:id', component: LnaContentComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    ModulePanelComponent,
    TopPanelComponent,
    LnaContentComponent,
    FooterQuicklinksComponent,
    HomepageComponent,
    EncapsulationComponent,
    InformationComponent,
    DashboardComponent
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
