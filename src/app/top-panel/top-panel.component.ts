import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ColorSchemesService } from '../color-schemes.service'

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.css']
})


export class TopPanelComponent implements OnInit{
  constructor(private route: ActivatedRoute, private router: Router, private colorSchemes: ColorSchemesService) { }

  showHomepage() {
    this.router.navigate(['homepage'], { relativeTo: this.route })
  }


  runTheme = "Blue";

  ngOnInit() {
    this.colorSchemes.data$.subscribe(data => {
      this.runTheme = data;
    })
  }

  //run color themes

}
