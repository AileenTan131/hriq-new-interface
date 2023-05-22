import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public images = [
    'picsum.photos.id.168.1920.1080.jpg',
    'picsum.photos.id.176.1920.1080.jpg',
    'picsum.photos.id.179.1920.1080.jpg',
    'picsum.photos.id.182.1920.1080.jpg',
    'picsum.photos.id.188.1920.1080.jpg',
    'picsum.photos.id.191.1920.1080.jpg',
    'picsum.photos.id.204.1920.1080.jpg',
    'picsum.photos.id.223.1920.1080.jpg',
    'picsum.photos.id.293.1920.1080.jpg',
    'picsum.photos.id.309.1920.1080.jpg',
    'picsum.photos.id.365.1920.1080.jpg',
    'picsum.photos.id.380.1920.1080.jpg',
    'picsum.photos.id.477.1920.1080.jpg',
    'picsum.photos.id.498.1920.1080.jpg',
    'picsum.photos.id.525.1920.1080.jpg',
    'picsum.photos.id.547.1920.1080.jpg',
    'picsum.photos.id.559.1920.1080.jpg',
    'picsum.photos.id.564.1920.1080.jpg',
    'picsum.photos.id.631.1920.1080.jpg',
  ];
/*  $('body').css({ 'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});*/


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
