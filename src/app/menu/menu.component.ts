import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  showSetting() {
   /* this.router.navigate(['setting'], { relativeTo: this.route });*/
  }
}
