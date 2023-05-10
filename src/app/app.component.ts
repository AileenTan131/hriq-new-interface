import { Component, OnInit } from '@angular/core';
import { ColorSchemesService } from './color-schemes.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
  runTheme = 'blue';
  runBlueTheme = 'blue';

  constructor(private colorSchemes: ColorSchemesService) { }

  ngOnInit() {
    this.colorSchemes.data$.subscribe(data => {
      this.runTheme = data;
    })
  }



}
