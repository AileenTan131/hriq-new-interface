import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-quicklinks',
  templateUrl: './footer-quicklinks.component.html',
  styleUrls: ['./footer-quicklinks.component.css']
})
export class FooterQuicklinksComponent {
  public quicklinks = [
    {"link": "Link01"},
    {"link": "Link02"},
    {"link": "Link03"},
    {"link": "Link04"},
    ]
}
