import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public menu = 'TRANSACTIONS';
  public hideTransaction = false;
  public hideReport = true;
  public hideSetting = true;

  showTransaction() {
    this.hideTransaction = false;
    this.hideReport = true;
    this.hideSetting = true;
    return this.menu = 'TRANSACTIONS';
  }
  showReport() {
    this.hideTransaction = true;
    this.hideReport = false;
    this.hideSetting = true;
    return this.menu = 'REPORTS';
  }
  showSetting() {
    this.hideTransaction = true;
    this.hideReport = true;
    this.hideSetting = false;
    return this.menu = 'SYSTEM';
    /* this.router.navigate(['setting'], { relativeTo: this.route });*/
  }
}
