import { Component } from '@angular/core';
import { CommonInputComponent } from '../../../shared/common-input/common-input.component';
import { CommonModule } from '@angular/common';
import { CommonCheckboxComponent } from '../../../shared/common-checkbox/common-checkbox.component';
import { CommonButtonComponent } from '../../../shared/common-button/common-button.component';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonInputComponent,
    CommonModule,
    CommonCheckboxComponent,
    CommonButtonComponent,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  // Input properties
  loginDetails = [
    { name: 'email', placeholder: 'Enter Email' },
    { name: 'password', placeholder: 'Enter Password' },
  ];

  // Button properties
  loginButton = {
    value: 'Login',
  };

  googleLoginButton = {
    value: 'Google'
  };
}
