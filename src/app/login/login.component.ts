import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

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

  constructor(private fb: FormBuilder) { }

  get userID() {
    return this.loginForm.get('userID')
  }
  get password() {
    return this.loginForm.get('password')
  }

  loginForm = this.fb.group({
    userID: ['', Validators.required],
    password: ['', Validators.required],
  })
}
