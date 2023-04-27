import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { TopPanelComponent } from './top-panel/top-panel.component';
import { ModulePanelComponent } from './module-panel/module-panel.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InformationComponent } from './information/information.component';
import { GlobalComponent } from './modules-learning/global/global.component';
import { LnaContentComponent } from './modules-learning/lna-content/lna-content.component';
import { SettingComponent } from './menu/learning-menu/setting/setting.component';
import { ReportComponent } from './menu/learning-menu/report/report.component';
import { TransactionComponent } from './menu/learning-menu/transaction/transaction.component';
import { FooterQuicklinksComponent } from './footer/footer-quicklinks.component';
import { LoginComponent } from './login/login.component';
import { HomepageLoginComponent } from './homepage-login/homepage-login.component';
import { LnaContentKendoComponent } from './modules-learning/lna-content-kendo/lna-content-kendo.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage-login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'homepage-login',
    component: HomepageLoginComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'homepage', component: HomepageComponent },
 /*     { path: 'menu', component: MenuComponent },
      { path: 'information', component: InformationComponent },*/

      { path: 'homepage/lna-content', component: LnaContentComponent},
      { path: 'homepage/lna-content-kendo', component: LnaContentKendoComponent },
      { path: 'homepage/global', component: GlobalComponent },
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
  MenuComponent,
  DashboardComponent,
  InformationComponent,
  GlobalComponent,
  LnaContentComponent,
  SettingComponent,
  ReportComponent,
  TransactionComponent,
  FooterQuicklinksComponent,
  FooterQuicklinksComponent,
  LoginComponent,
  HomepageLoginComponent,
  LnaContentKendoComponent,
]


