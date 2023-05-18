import { Component } from '@angular/core';
import { ColorSchemesService } from '../color-schemes.service';
/*import { colorFilter } from '../color-filter.service'*/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  runTheme: any;

  constructor(
    private colorSchemes: ColorSchemesService,
  ) {
    this.colorSchemes.data$.subscribe(data => {
      this.runTheme = data;
    })
  }

/*  public images = [
    'https://picsum.photos/id/235/1920/1080',
    'https://picsum.photos/id/191/1920/1080',
    'https://picsum.photos/id/204/1920/1080',
    'https://picsum.photos/id/159/1920/1080',
    'https://picsum.photos/id/164/1920/1080',
    'https://picsum.photos/id/179/1920/1080',
    'https://picsum.photos/id/152/1920/1080',
  ];
  $('body').css({ 'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});
*/
}
