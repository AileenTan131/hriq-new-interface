import { Component } from '@angular/core';
import { QuicklinkService  } from '../quicklink.service'

@Component({
  selector: 'app-footer-quicklinks',
  templateUrl: './footer-quicklinks.component.html',
  styleUrls: ['./footer-quicklinks.component.css']
})
export class FooterQuicklinksComponent {
  qData: any;

  constructor(private quicklinkService: QuicklinkService) {
    this.quicklinkService.$quicklinkData.subscribe(data => {
      this.qData = data;
    })
  }

  public quicklinks = [
    "Link01",
    "Link02",
    "Link03",
    "Link04",
    "Link05",
    "Link06",
    "Link07",
    "Link08",
    "Link09",
    "Link10",
  ];

    maxquicklinks = 15
}
