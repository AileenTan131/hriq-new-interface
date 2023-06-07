import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage-login',
  templateUrl: './homepage-login.component.html',
  styleUrls: ['./homepage-login.component.css']
})
export class HomepageLoginComponent {
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  showHomepage() {
    this.router.navigate(['homepage'], { relativeTo: this.route })
  }
}
