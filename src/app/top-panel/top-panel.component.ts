import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ColorFiltersService } from '../color-filters.service';
import { ColorSchemesService } from '../color-schemes.service'

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.css']
})


export class TopPanelComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private colorSchemes: ColorSchemesService,
    private colorFilter: ColorFiltersService
  ) { }

  showHomepage() {
    this.router.navigate(['homepage'], { relativeTo: this.route })
  }

  runBlueTheme: any;
  runTheme = '';

  ngOnInit() {
    this.colorSchemes.data$.subscribe(data => {
      this.runTheme = data;
    })


    this.colorFilter.filterData.subscribe(data => {
      this.runBlueTheme = data;

      this.runBlueTheme = true;
    })
  }

  //run color themes

}
