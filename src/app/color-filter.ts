import { Directive, HostBinding, OnInit } from '@angular/core';
import { ColorSchemesService } from './color-schemes.service';


@Directive({
  selector: '[addFilter]',
})
export class ColorFilter implements OnInit {
  filterclass = '';
  runTheme : any;
  @HostBinding('class') filterClass = 'blue-filter04';

/*  constructor() { }*/

  constructor(
    private colorSchemes: ColorSchemesService,
  ) {
    this.colorSchemes.data$.subscribe(data => {
      this.runTheme = data;
      console.log(this.runTheme);
    })
  }

  ngOnInit(): void {
    switch (this.runTheme) {
      case 'Blue':
        this.filterClass = 'blue-filter04';
        break;
      case 'Green':
        this.filterClass = 'green-filter04';
        break;
      case 'Red':
        this.filterClass = 'red-filter04';
        break;
    }
  }
}
