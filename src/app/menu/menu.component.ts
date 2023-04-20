import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public hideTransaction = false;
  public hideReport = true;
  public hideSetting = true;
  showTransaction() {
    this.hideTransaction = false;
    this.hideReport = true;
    this.hideSetting = true;
  }
  showReport() {
    this.hideTransaction = true;
    this.hideReport = false;
    this.hideSetting = true;
  }
  showSetting() {
    this.hideTransaction = true;
    this.hideReport = true;
    this.hideSetting = false;
    /* this.router.navigate(['setting'], { relativeTo: this.route });*/
  }
}
