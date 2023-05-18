import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.css']
})


export class TopPanelComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
 ) {}

  showHomepage() {
    this.router.navigate(['homepage'], { relativeTo: this.route })
  }
}
