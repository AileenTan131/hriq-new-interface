import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})

export class HomepageComponent implements OnInit {
  public name = "Jesicca";
  toggleOff = false

  ngOnInit() { }
  constructor(private route: ActivatedRoute, private router: Router, private location: Location) { }

  togglepage() {
    if (this.location.path() === '/homepage') {
      this.toggleOff = true,
        this.router.navigate(['information'], { relativeTo: this.route });
    } else {
      this.toggleOff = false,
        this.location.back();
    };


  }
}
