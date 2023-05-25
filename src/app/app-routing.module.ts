import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { TopPanelComponent } from './top-panel/top-panel.component';
import { ModulePanelComponent } from './module-panel/module-panel.component';
import { DashboardComponent } from './homepage/dashboard/dashboard.component';
import { InformationComponent } from './homepage/information/information.component';
import { GlobalComponent } from './modules-learning/global/global.component';
import { SettingComponent } from './menu/learning-menu/setting/setting.component';
import { ReportComponent } from './menu/learning-menu/report/report.component';
import { TransactionComponent } from './menu/learning-menu/transaction/transaction.component';
import { FooterQuicklinksComponent } from './footer/footer-quicklinks.component';
import { LoginComponent } from './login/login.component';
import { HomepageLoginComponent } from './homepage-login/homepage-login.component';
import { LnaContentKendoComponent } from './modules-learning/lna-content-kendo/lna-content-kendo.component';
import { CoursesInterestedComponent } from './modules-learning/lna-content-kendo/courses-interested/courses-interested.component';
import { TimeSettingComponent } from './menu/time-menu/setting/setting.component';

import { ColorFilter } from './color-filter';
import { BgChangeImageDirective } from './app-BgChangeImage'

const routes: Routes = [
  { path: '', redirectTo: '/homepage-login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent }, //Login Page
  {
    path: 'homepage-login', //After Login Main Homepage
    component: HomepageLoginComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'homepage', component: HomepageComponent },
      { path: 'homepage/lna-content', component: LnaContentKendoComponent },
      { path: 'homepage/global', component: GlobalComponent },
      { path: 'homepage/lna-content-kendo/courses-interested', component:CoursesInterestedComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const RoutingComponents = [
  HomepageComponent,
  TopPanelComponent,
  ModulePanelComponent,
  DashboardComponent,
  InformationComponent,
  GlobalComponent,
  SettingComponent,
  ReportComponent,
  TransactionComponent,
  FooterQuicklinksComponent,
  FooterQuicklinksComponent,
  LoginComponent,
  HomepageLoginComponent,
  LnaContentKendoComponent,
  CoursesInterestedComponent,
  TimeSettingComponent,
  ColorFilter,
  BgChangeImageDirective
]


