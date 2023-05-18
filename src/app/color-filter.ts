import { Directive, HostBinding } from '@angular/core';
import { ColorSchemesService } from './color-schemes.service';


@Directive({
  selector: '[addFilter]',
})
export class ColorFilter {
/*  filterclass = '';*/
  runTheme : any;

  @HostBinding('class') filterClass = '';

  constructor(
    private colorSchemes: ColorSchemesService,
  ) {
    this.colorSchemes.data$.subscribe(data => {
      this.runTheme = data;
      this.switchTheme();
    })
  }

  switchTheme(): void {
    switch (this.runTheme) {
      case 'Blue':
        this.filterClass = 'blue-filter';
        break;
      case 'Green':
        this.filterClass = 'green-filter';
        break;
      case 'Red':
        this.filterClass = 'red-filter';
        break;
      case 'Hydrangea':
        this.filterClass = 'hydrangea-filter';
        break;
      case 'Sakura':
        this.filterClass = 'sakura-filter';
        break;
      case 'Lavender':
        this.filterClass = 'lavender-filter';
        break;
      case 'Mediterranean':
        this.filterClass = 'mediterranean-filter';
        break;
      case 'Industrial':
        this.filterClass = 'industrial-filter';
        break;
      case 'Minimalist':
        this.filterClass = 'minimalist-filter';
        break;
      case 'Bohemian':
        this.filterClass = 'bohemian-filter';
        break;
      case 'Forest':
        this.filterClass = 'forest-filter';
        break;
      case 'Beach':
        this.filterClass = 'beach-filter';
        break;
      case 'Sea':
        this.filterClass = 'sea-filter';
        break;
      case 'Spring':
        this.filterClass = 'spring-filter';
        break;
      case 'Winter':
        this.filterClass = 'winter-filter';
        break;
      case 'Summer':
        this.filterClass = 'summer-filter';
        break;
      case 'Autumn':
        this.filterClass = 'autumn-filter';
        break;
    }
  }
}


         
