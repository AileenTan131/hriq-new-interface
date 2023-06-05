import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent {
  public showPassword: boolean;

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
