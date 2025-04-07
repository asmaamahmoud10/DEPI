import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor() {}

  onSubmit(): void {
    if (this.email && this.password) {
      console.log('Logging in with', this.email, this.password);
    } else {
      console.error('Please fill in both email and password');
    }
  }

  onSignup(): void {
    console.log('Redirecting to signup...');
  }
}
