import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ColorSchemesService } from '../color-schemes.service';
/*import { colorFilter } from '../color-filter.service'*/

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.css']
})


export class TopPanelComponent {
  runTheme = '';
/*  themeFilters: any;*/


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private colorSchemes: ColorSchemesService,
  ) {
    this.colorSchemes.data$.subscribe(data => {
    this.runTheme = data;
  /*  this.changeTheme();*/
    })
  }

  showHomepage() {
    this.router.navigate(['homepage'], { relativeTo: this.route })
  }

 /* changeTheme() { 
  this.themeFilters = {
    "blue-filter": this.runTheme === 'Blue',
    "green-filter": this.runTheme === 'Green',
    "red-filter": this.runTheme === 'Red',
    "hydrangea-filter": this.runTheme === 'Hydrangea',
    "sakura-filter": this.runTheme === 'Sakura',
    "lavender-filter": this.runTheme === 'Lavender',
    "mediterranean-filter": this.runTheme === 'Mediterranean',
    "industrial-filter": this.runTheme === 'Industrial',
    "minimalist-filter": this.runTheme === 'Minimalist',
    "bohemian-filter": this.runTheme === 'Bohemian',
    "forest-filter": this.runTheme === 'Forest',
    "beach-filter": this.runTheme === 'Beach',
    "sea-filter": this.runTheme === 'Sea',
    "spring-filter": this.runTheme === 'Spring',
    "winter-filter": this.runTheme === 'Winter',
    "summer-filter": this.runTheme === 'Summer',
    "autumn-filter": this.runTheme === 'Autumn'
  }
}*/
}
