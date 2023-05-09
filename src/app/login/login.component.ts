import { Component } from '@angular/core';
import { ColorSchemesService } from '../color-schemes.service';

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
}
