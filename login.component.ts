import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  passwordInputType: string = 'password';
  emailInputFocus: boolean = false;
  passwordInputFocus: boolean = false;

  togglePasswordVisibility(): void {
    this.passwordInputType = this.passwordInputType === 'password' ? 'text' : 'password';
  }

  onFocusEmailInput(): void {
    this.emailInputFocus = true;
  }

  onBlurEmailInput(): void {
    this.emailInputFocus = false;
  }

  onFocusPasswordInput(): void {
    this.passwordInputFocus = true;
  }

  onBlurPasswordInput(): void {
    this.passwordInputFocus = false;
  }
}
