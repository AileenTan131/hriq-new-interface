import { Component, OnInit } from '@angular/core';
import { ColorSchemesService } from './color-schemes.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
  runGreenTheme: any;
  runRedTheme: any;

  constructor(private colorSchemes: ColorSchemesService) { }

  ngOnInit() {
    this.colorSchemes.data$.subscribe(data => {
      this.runGreenTheme = data;
    })


  //Red Theme
/*    this.colorSchemes.data$.subscribe(data => {
      this.runRedTheme = data;
    })*/
  }



}
